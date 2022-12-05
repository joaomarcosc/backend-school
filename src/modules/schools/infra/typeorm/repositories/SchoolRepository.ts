import { singleton } from "tsyringe";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../configs/ormconfig";
import SchoolClass from "../../../../school_class/infra/typeorm/entities/SchoolClass";
import { IGetSchoolParams, ISchoolRepository } from "../../../repositories";
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

  async get(params: IGetSchoolParams): Promise<SchoolClass> {
    const school_with_class = await this.ormRepository.find({
      where: { id: params.id },
      relations: {
        school_class: true
      }
    })

    return school_with_class[0].school_class
  }
}

export default SchoolRepository