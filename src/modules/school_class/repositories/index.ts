import SchoolClass from "../infra/typeorm/entities/SchoolClass";
import { ICreateSchoolClass } from "../types/ICreateSchoolClass";

export interface ISchoolClassRepository {
  create(data: ICreateSchoolClass): Promise<SchoolClass>
}