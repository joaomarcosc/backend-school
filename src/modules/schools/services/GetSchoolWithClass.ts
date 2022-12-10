import { inject, injectable } from "tsyringe";
import { QueryFailedError } from "typeorm";
import SchoolClass from "../../school_class/infra/typeorm/entities/SchoolClass";
import { IGetSchoolParams, ISchoolRepository } from "../repositories";

@injectable()
export class GetSchoolWithClass {
  constructor(
    @inject('SchoolRepository') private schoolRepository: ISchoolRepository
  ) { }

  async execute(params: IGetSchoolParams): Promise<SchoolClass> {
    try {
      const school = await this.schoolRepository.get(params);

    return school;
    } catch(e) {
      const error: QueryFailedError = e
      return error as any
    }
  }
}