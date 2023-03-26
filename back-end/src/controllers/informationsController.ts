import { Request, Response } from "express";

import db from "../db/postgres";

export default async function createInformations(req: Request, res: Response) {
  try {
    const data = await db.query("SELECT * FROM informations");
    console.log(data);

    res.send("hello");
  } catch (error) {
    console.log(error);
  }
}
