import { Request, Response } from "express";

import db from "../db/postgres.js";

export async function createInformations(req: Request, res: Response) {
  const { name, linkedinUrl, githubUrl } = req.body;
  if (!name || !linkedinUrl || !githubUrl) {
    return res.sendStatus(422);
  }
  const nameAdjusted = name.replace(" ", "-");
  try {
    const info = await db.query("SELECT * FROM informations WHERE name = $1", [
      nameAdjusted,
    ]);
    if (info.rowCount !== 0) {
      return res.sendStatus(409);
    }
    await db.query(
      "INSERT INTO informations (name,linkedin_url,github_url) VALUES ($1,$2,$3)",
      [nameAdjusted, linkedinUrl, githubUrl]
    );

    res.status(201).send({ name, linkedinUrl, githubUrl });
  } catch (error) {
    res.sendStatus(500);
  }
}

export async function getInformations(req: Request, res: Response) {
  const { name } = req.params;
  try {
    const info = await db.query("SELECT * FROM informations WHERE name = $1", [
      name,
    ]);
    if (info.rowCount === 0) {
      return res.sendStatus(404);
    }
    res.status(200).send(info.rows);
  } catch (error) {
    res.sendStatus(500);
  }
}
