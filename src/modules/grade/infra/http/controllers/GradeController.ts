import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateGradeService from "../../../service/CreateGradeService";
import Grade from "../../typeorm/entities/Grade";

export default class GradeController {
  public async post(request: Request, response: Response): Promise<Response> {
    const {
      final_grade,
      ...body
    } = request.body

    const approved = final_grade > 6

    const createGrade = container.resolve(CreateGradeService)
    const grade = await createGrade.execute({ ...body, final_grade, approved })

    if(grade instanceof Grade) {
      return response.json({ grade })

    }
    return response.status(400).json({grade})
  }
}