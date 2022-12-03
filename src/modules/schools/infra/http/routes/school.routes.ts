import { Router } from "express";
import SchoolController from "../controllers/SchoolController";

const schoolRouter = Router();
const schoolController = new SchoolController();

schoolRouter.post("/", schoolController.create);

export default schoolRouter;