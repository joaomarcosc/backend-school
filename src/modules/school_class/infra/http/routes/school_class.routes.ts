import { Router } from "express";
import SchoolClassController from "../controllers/SchoolClassController";

const schoolClassRouter = Router();
const schoolClassController = new SchoolClassController();

schoolClassRouter.get("/", schoolClassController.get);
schoolClassRouter.post("/", schoolClassController.post);

export default schoolClassRouter;