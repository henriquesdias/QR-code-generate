import { Request, Response } from "express";

import db from "../db/postgres";

export async function createInformations(req: Request, res: Response) {
  const { name, linkedinUrl, githubUrl } = req.body;
  if (!name || !linkedinUrl || !githubUrl) {
    return res.sendStatus(422);
  }
  const nameAdjusted = name.replace(" ", "-");
  try {
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
    res.status(200).send(info.rows);
  } catch (error) {
    res.sendStatus(500);
  }
}
