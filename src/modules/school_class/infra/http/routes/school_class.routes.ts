import { Router } from "express";
import SchoolClassController from "../controllers/SchoolClassController";

const schoolClassRouter = Router();
const schoolClassController = new SchoolClassController();

schoolClassRouter.post("/", schoolClassController.post);

export default schoolClassRouter;