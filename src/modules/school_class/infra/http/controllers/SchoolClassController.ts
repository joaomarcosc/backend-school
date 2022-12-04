import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateSchoolClass from "../../../services/CreateSchoolClassService";

export default class SchoolClassController {
  public async post(request: Request, response: Response): Promise<Response> {
    const body = request.body

    const createSchoolClass = container.resolve(CreateSchoolClass)
    const school_class = await createSchoolClass.execute(body)

    return response.json(school_class)
  }
}