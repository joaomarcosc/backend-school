import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppDataSource } from "../../../../../configs/ormconfig";
import { CreateSchoolService } from "../../../services/CreateSchoolService";
import { GetSchoolWithClass } from "../../../services/GetSchoolWithClass";
import School from "../../typeorm/entities/School";

export default class SchoolController {
  public async post(_: Request, response: Response): Promise<Response> {
    const body = {
      name: "teste",
      document: "000000000",
      address: "Rua tal, numero tal",
      zipcode: "0000000",
      city: "Salvador",
      state: "Bahia",
      country: "Brasil",
      brand: "opa"
    }

    const repo = AppDataSource.getRepository(School)
    const school = await repo.findOneBy({ name: body.name })

    if (!school) {
      const createSchool = container.resolve(CreateSchoolService)
      const schoolResponse = await createSchool.execute(body)
      return response.json(schoolResponse)
    }

    return response.json(school)
  }

  public async get(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const getSchool = container.resolve(GetSchoolWithClass)
    const school = await getSchool.execute({ id })

    return response.json(school)
  }
}