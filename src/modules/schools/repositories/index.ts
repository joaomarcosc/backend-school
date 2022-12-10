import SchoolClass from "../../school_class/infra/typeorm/entities/SchoolClass";
import School from "../infra/typeorm/entities/School";

export interface IGetSchoolParams {
  id: string
}

export interface ISchoolRepository {
  create(data: ICreateSchoolDTO): Promise<School>
  get(params: IGetSchoolParams): Promise<SchoolClass>
}