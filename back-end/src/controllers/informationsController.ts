import { Request, Response } from "express";

export default function createInformations(req: Request, res: Response) {
  res.send("hello");
}
