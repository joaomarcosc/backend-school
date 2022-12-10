import { inject, injectable } from "tsyringe";
import { QueryFailedError } from "typeorm";
import SchoolClass from "../infra/typeorm/entities/SchoolClass";
import { ISchoolClassRepository } from "../repositories";

@injectable()
class GetAllSchoolClassService {
  constructor(
    @inject('SchoolClassRepository') private schoolClassRepository: ISchoolClassRepository
  ) { }

  async execute(): Promise<SchoolClass[]> {
    try {
      const school = await this.schoolClassRepository.get()

      return school;
    } catch(e) {
      const error: QueryFailedError = e
      return error.message as any
    }
  }
}

export default GetAllSchoolClassService