import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateGradeService from "../../../service/CreateGradeService";

export default class GradeController {
  public async post(request: Request, response: Response): Promise<Response> {
    const {
      final_grade,
      ...body
    } = request.body

    const approved = final_grade > 6

    const createGrade = container.resolve(CreateGradeService)
    const grade = await createGrade.execute({ ...body, final_grade, approved })

    return response.json({ grade })
  }
}