import { Router } from "express";

import createInformations from "../controllers/informationsController";

const informationsRouter = Router();

informationsRouter.post("/", createInformations);

export default informationsRouter;
