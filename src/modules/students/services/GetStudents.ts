import { inject, injectable } from "tsyringe";
import { QueryFailedError } from "typeorm";
import Students from "../infra/typeorm/entities/Students";
import { IStudentsRepository } from "../repositories";
import { IRequestParams } from "../types/IRequestParams";

@injectable()
class GetStudentsServices {
  constructor(
    @inject("StudentsRepository") private studentsRepository: IStudentsRepository
  ) { }

  async execute(id?: string): Promise<Students | Students[]> {
    try {
      const students = await this.studentsRepository.list(id);

      return students;
    } catch (e) {
      const error: QueryFailedError = e
      return error.message as any
    }
  }
}

export default GetStudentsServices