import { singleton } from "tsyringe";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../configs/ormconfig";
import { ISchoolRepository } from "../../../repositories";
import School from "../entities/School";


@singleton()
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