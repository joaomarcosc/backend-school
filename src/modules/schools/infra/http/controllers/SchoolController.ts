import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppDataSource } from "../../../../../configs/ormconfig";
import { CreateSchoolService } from "../../../services/CreateSchoolService";
import School from "../../typeorm/entities/School";

export default class SchoolController {
  public async get(_: Request, response: Response): Promise<Response> {
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

    if (await repo.findOneBy({ name: body.name })) {
      return response.json(body)
    }
    const createSchool = container.resolve(CreateSchoolService)
    const school = await createSchool.execute(body)

    return response.json(school)
  }
}