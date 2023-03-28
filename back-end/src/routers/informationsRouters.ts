import { Router } from "express";

import {
  createInformations,
  getInformations,
} from "../controllers/informationsController.js";

const informationsRouter = Router();

informationsRouter.post("/", createInformations).get("/:name", getInformations);

export default informationsRouter;
