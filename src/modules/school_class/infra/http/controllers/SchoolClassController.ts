import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateSchoolClass from "../../../services/CreateSchoolClassService";
import GetAllSchoolClassService from "../../../services/GetAllSchoolClassService";

export default class SchoolClassController {
  public async post(request: Request, response: Response): Promise<Response> {
    const body = request.body

    const createSchoolClass = container.resolve(CreateSchoolClass)
    const school_class = await createSchoolClass.execute(body)

    return response.json(school_class)
  }

  public async get(_: Request, response: Response): Promise<Response> {
    const getSchoolClass = container.resolve(GetAllSchoolClassService)
    const school_class = await getSchoolClass.execute()

    return response.json({ school_class })
  }
}