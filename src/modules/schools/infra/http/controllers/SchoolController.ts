import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppDataSource } from "../../../../../configs/ormconfig";
import { CreateSchoolService } from "../../../services/CreateSchoolService";
import { GetSchoolWithClass } from "../../../services/GetSchoolWithClass";
import School from "../../typeorm/entities/School";

export default class SchoolController {
  public async post(_: Request, response: Response): Promise<Response> {
    const body = {
      name: "Escola Facs",
      document: "00.000.000/0001-91",
      address: "Avenida Luís Viana",
      zipcode: "41720-200",
      city: "Salvador",
      state: "Bahia",
      country: "Brasil",
      brand: "https://h2i.s3.sa-east-1.amazonaws.com/upload/images/150459202212076390d5cbefeaa.png"
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