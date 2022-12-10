import { inject, injectable } from "tsyringe";
import { QueryFailedError } from "typeorm";
import School from "../infra/typeorm/entities/School";
import { ISchoolRepository } from "../repositories";

interface IRequest {
  name: string
  document: string
  address: string
  zipcode: string
  city: string;
  state: string
  country: string;
}

@injectable()
export class CreateSchoolService {
  constructor(
    @inject('SchoolRepository') private schoolRepository: ISchoolRepository
  ) { }

  async execute(request: IRequest): Promise<School> {
    try {
      const school = await this.schoolRepository.create(request);

      return school;
    } catch(e) {
      const error: QueryFailedError = e
      return error as any
    }
  }
}