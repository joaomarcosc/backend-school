import School from "../infra/typeorm/entities/School";

export interface ISchoolRepository {
  create(data: ICreateSchoolDTO): Promise<School>
}