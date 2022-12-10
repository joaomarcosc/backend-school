import { inject, injectable } from "tsyringe";
import { QueryFailedError } from "typeorm";
import Teacher from "../infra/typeorm/entities/Teacher";
import { ITeacherRepository } from "../respositories";
import { ICreateTeacher } from "../types/ICreateTeacher";

@injectable()
class CreateTeacher {
  constructor(
    @inject('TeacherRepository') private schoolClassRepository: ITeacherRepository
  ) { }

  async execute(request: ICreateTeacher): Promise<Teacher> {
    try {
      const teacher = await this.schoolClassRepository.create(request);

    return teacher;
    } catch(e) {
      const error: QueryFailedError = e
      return error as any
    }
  }
}

export default CreateTeacher