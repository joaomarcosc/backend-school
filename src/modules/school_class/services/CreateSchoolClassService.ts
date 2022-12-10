import { inject, injectable } from "tsyringe";
import { QueryFailedError } from "typeorm";
import SchoolClass from "../infra/typeorm/entities/SchoolClass";
import { ISchoolClassRepository } from "../repositories";
import { ICreateSchoolClass } from "../types/ICreateSchoolClass";

@injectable()
class CreateSchoolClass {
  constructor(
    @inject('SchoolClassRepository') private schoolClassRepository: ISchoolClassRepository
  ) { }

  async execute(request: ICreateSchoolClass): Promise<SchoolClass> {    
    try {
      const school = await this.schoolClassRepository.create(request);

      return school;
    } catch(e) {
      const error: QueryFailedError = e
      return error.message as any
    }
  }
}

export default CreateSchoolClass