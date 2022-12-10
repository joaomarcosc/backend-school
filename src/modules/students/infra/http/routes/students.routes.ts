import { Router } from "express";
import StudentsController from "../controllers/StudentsController";

const studentsRouter = Router()
const studentsController = new StudentsController()

studentsRouter.post("/", studentsController.post)
studentsRouter.get("/", studentsController.get)

export default studentsRouter