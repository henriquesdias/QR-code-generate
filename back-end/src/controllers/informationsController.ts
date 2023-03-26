import { Request, Response } from "express";

import db from "../db/postgres";

export default async function createInformations(req: Request, res: Response) {
  const { name, linkedinUrl, githubUrl } = req.body;
  if (!name || !linkedinUrl || !githubUrl) {
    return res.sendStatus(422);
  }
  try {
    const data = await db.query(
      "INSERT INTO informations (name,linkedin_url,github_url) VALUES ($1,$2,$3)",
      [name, linkedinUrl, githubUrl]
    );

    res.status(201).send({ name, linkedinUrl, githubUrl });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
