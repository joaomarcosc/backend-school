import { inject, injectable } from "tsyringe";
import Teacher from "../infra/typeorm/entities/Teacher";
import { ITeacherRepository } from "../respositories";
import { ICreateTeacher } from "../types/ICreateTeacher";

@injectable()
class CreateTeacher {
  constructor(
    @inject('TeacherRepository') private schoolClassRepository: ITeacherRepository
  ) { }

  async execute(request: ICreateTeacher): Promise<Teacher> {
    const teacher = await this.schoolClassRepository.create(request);

    return teacher;
  }
}

export default CreateTeacher