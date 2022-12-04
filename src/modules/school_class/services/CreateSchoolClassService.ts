import { inject, injectable } from "tsyringe";
import SchoolClass from "../infra/typeorm/entities/SchoolClass";
import { ISchoolClassRepository } from "../repositories";
import { ICreateSchoolClass } from "../types/ICreateSchoolClass";

@injectable()
class CreateSchoolClass {
  constructor(
    @inject('SchoolClassRepository') private schoolClassRepository: ISchoolClassRepository
  ) { }

  async execute(request: ICreateSchoolClass): Promise<SchoolClass> {
    const school = await this.schoolClassRepository.create(request);

    return school;
  }
}

export default CreateSchoolClass