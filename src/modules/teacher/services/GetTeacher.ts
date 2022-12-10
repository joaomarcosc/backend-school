import { inject, injectable } from "tsyringe";
import { QueryFailedError } from "typeorm";
import Teacher from "../infra/typeorm/entities/Teacher";
import { ITeacherRepository } from "../respositories";

@injectable()
class GetTeacher {
  constructor(
    @inject("TeacherRepository") private teacherRepository: ITeacherRepository
  ) {}

    async execute(id?: string): Promise<Teacher | Teacher[]> {
        try {
          const teacher = await this.teacherRepository.list(id)

          return teacher
        } catch(e) {
          const error: QueryFailedError = e

          return error as any
        }
    }
}

export default GetTeacher