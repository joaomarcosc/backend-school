import { Router } from "express";
import GradeController from "../controllers/GradeController";

const gradeRouter = Router()
const gradeController = new GradeController()

gradeRouter.post('/', gradeController.post)

export default gradeRouter