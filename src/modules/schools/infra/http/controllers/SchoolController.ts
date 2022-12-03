import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSchoolService } from "../../../services/CreateSchoolService";

export default class SchoolController {
  public async create(request: Request, response: Response): Promise<Response> {
    const body = request.body;

    const createSchool = container.resolve(CreateSchoolService)
    const school = await createSchool.execute(body)

    return response.json(school)
  }
}