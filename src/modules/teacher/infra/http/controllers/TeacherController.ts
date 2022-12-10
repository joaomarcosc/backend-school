import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateTeacher from "../../../services/CreateTeacher";
import Teacher from "../../typeorm/entities/Teacher";

export default class TeacherController {
  public async post(request: Request, response: Response): Promise<Response> {
    const body = request.body

    const createTeacher = container.resolve(CreateTeacher)
    const teacher = await createTeacher.execute(body)

    if(teacher instanceof Teacher) {
      return response.json(teacher)
    }
    return response.status(400).json(teacher)
  }
}