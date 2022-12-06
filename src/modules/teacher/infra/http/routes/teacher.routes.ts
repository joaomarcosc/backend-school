import { Router } from "express";
import TeacherController from "../controllers/TeacherController";

const teacherRouter = Router();
const schoolClassController = new TeacherController();

teacherRouter.post("/", schoolClassController.post);

export default teacherRouter;