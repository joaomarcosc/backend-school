import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateTeacher from "../../../services/CreateTeacher";

export default class TeacherController {
  public async post(request: Request, response: Response): Promise<Response> {
    const body = request.body

    const createTeacher = container.resolve(CreateTeacher)
    const teacher = await createTeacher.execute(body)

    return response.json(teacher)
  }
}