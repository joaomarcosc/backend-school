import { inject, injectable } from "tsyringe";
import Students from "../infra/typeorm/entities/Students";
import { IStudentsRepository } from "../repositories";
import { IRequestParams } from "../types/IRequestParams";

@injectable()
class CreateStudentsServices {
  constructor(
    @inject("StudentsRepository") private studentsRepository: IStudentsRepository
  ) { }

  async execute(data: IRequestParams): Promise<Students> {
    const teacher = await this.studentsRepository.create(data);

    return teacher;
  }
}

export default CreateStudentsServices