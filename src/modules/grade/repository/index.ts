import Grade from "../infra/typeorm/entities/Grade";
import { IRequestParams } from "../types/IGradeRepository";

export interface IGradeRepository {
  create(request: IRequestParams): Promise<Grade>
}