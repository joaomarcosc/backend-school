import { Request, Response } from "express"
import { container } from "tsyringe"
import CreateStudentsServices from "../../../services/CreateStudents"

export default class StudentsController {
  public async post(request: Request, response: Response): Promise<Response> {
    const body = request.body

    const createStudents = container.resolve(CreateStudentsServices)
    const students = await createStudents.execute(body)

    return response.json({ students })
  }
}