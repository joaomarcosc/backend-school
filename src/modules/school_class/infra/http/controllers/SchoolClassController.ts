import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateSchoolClass from "../../../services/CreateSchoolClassService";
import GetAllSchoolClassService from "../../../services/GetAllSchoolClassService";
import SchoolClass from "../../typeorm/entities/SchoolClass";

export default class SchoolClassController {
  public async post(request: Request, response: Response): Promise<Response> {
    const body = request.body

    const createSchoolClass = container.resolve(CreateSchoolClass)
    const school_class = await createSchoolClass.execute(body)

    if(school_class instanceof SchoolClass) {
      return response.json(school_class)
    }
    return response.status(400).json(school_class)
  }

  public async get(_: Request, response: Response): Promise<Response> {
    const getSchoolClass = container.resolve(GetAllSchoolClassService)
    const school_class = await getSchoolClass.execute()

    if(school_class instanceof SchoolClass) {
      return response.json({ school_class })
    }
    return response.status(400).json(school_class)
  }
}