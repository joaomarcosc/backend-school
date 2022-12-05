import { Router } from "express";
import SchoolController from "../controllers/SchoolController";

const schoolRouter = Router();
const schoolController = new SchoolController();

schoolRouter.get("/", schoolController.post);
schoolRouter.get("/:id/class", schoolController.get);

export default schoolRouter;