import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../../ormconfig";
import School from "../entities/School";

interface ICreateSchoolDTO {
  name: string
  document: string
  address: string
  zipcode: string
  city: string;
  state: string
  country: string;
}

interface ISchoolRepository {
  create(data: ICreateSchoolDTO): Promise<School>
}

class SchoolRepository implements ISchoolRepository {
  private ormRepository: Repository<School>

  constructor() {
    this.ormRepository = AppDataSource.manager.getRepository(School)
  }

  async create(data: ICreateSchoolDTO): Promise<School> {
    const school = this.ormRepository.create(data)

    await this.ormRepository.save(school)

    return school
  }
}

export default SchoolRepository