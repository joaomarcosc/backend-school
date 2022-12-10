import Teacher from "../infra/typeorm/entities/Teacher";
import { ICreateTeacher } from "../types/ICreateTeacher";

export interface ITeacherRepository {
  create(data: ICreateTeacher): Promise<Teacher>
  list(id?: string): Promise<Teacher | Teacher[]>
}