import { Request, Response } from "express"
import { container } from "tsyringe"
import CreateStudentsServices from "../../../services/CreateStudents"
import GetStudentsServices from "../../../services/GetStudents"
import Students from "../../typeorm/entities/Students"

export default class StudentsController {
  public async post(request: Request, response: Response): Promise<Response> {
    const body = request.body

    const createStudents = container.resolve(CreateStudentsServices)
    const students = await createStudents.execute(body)

    return response.json({ students })
  }

  public async get(request: Request, response: Response): Promise<Response> {
    const { id } = request.body

    const listStudents = container.resolve(GetStudentsServices)
    const students = await listStudents.execute(id)
    if (students instanceof Students) {
      return response.json(students)
    }

    return response.status(400).json(students)
  }
}