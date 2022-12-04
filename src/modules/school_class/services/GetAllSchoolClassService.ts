import { inject, injectable } from "tsyringe";
import SchoolClass from "../infra/typeorm/entities/SchoolClass";
import { ISchoolClassRepository } from "../repositories";
import { ICreateSchoolClass } from "../types/ICreateSchoolClass";

@injectable()
class GetAllSchoolClassService {
  constructor(
    @inject('SchoolClassRepository') private schoolClassRepository: ISchoolClassRepository
  ) { }

  async execute(): Promise<SchoolClass[]> {
    const school = await this.schoolClassRepository.get()

    return school;
  }
}

export default GetAllSchoolClassService