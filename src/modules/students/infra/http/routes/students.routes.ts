import { Router } from "express";
import StudentsController from "../controllers/StudentsController";

const studentsRouter = Router()
const studentsController = new StudentsController()

studentsRouter.post("/", studentsController.post)

export default studentsRouter