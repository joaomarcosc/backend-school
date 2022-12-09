import Students from "../infra/typeorm/entities/Students";
import { IRequestParams } from "../types/IRequestParams";

export interface IStudentsRepository {
  create(data: IRequestParams): Promise<Students>
  list(id?: string): Promise<Students | Students[]>
}