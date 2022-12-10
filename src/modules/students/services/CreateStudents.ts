import { inject, injectable } from "tsyringe";
import { QueryFailedError } from "typeorm";
import Students from "../infra/typeorm/entities/Students";
import { IStudentsRepository } from "../repositories";
import { IRequestParams } from "../types/IRequestParams";

@injectable()
class CreateStudentsServices {
  constructor(
    @inject("StudentsRepository") private studentsRepository: IStudentsRepository
  ) { }

  async execute(data: IRequestParams): Promise<Students> {
    try {
      const students = await this.studentsRepository.create(data);

      return students;
    } catch(e) {
      const error: QueryFailedError = e
      return error.message as any
    }

  }
}

export default CreateStudentsServices