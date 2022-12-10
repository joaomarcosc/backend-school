import { Router } from "express";
import TeacherController from "../controllers/TeacherController";

const teacherRouter = Router();
const teacherController = new TeacherController();

teacherRouter.post("/", teacherController.post);
teacherRouter.get("/", teacherController.get);

export default teacherRouter;