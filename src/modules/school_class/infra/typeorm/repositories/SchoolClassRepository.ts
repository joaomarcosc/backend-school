import { singleton } from "tsyringe";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../configs/ormconfig";
import { ISchoolClassRepository } from "../../../repositories";
import { ICreateSchoolClass } from "../../../types/ICreateSchoolClass";
import SchoolClass from "../entities/SchoolClass";

@singleton()
class SchoolClassRepository implements ISchoolClassRepository {
  private ormRepository: Repository<SchoolClass>

  constructor() {
    this.ormRepository = AppDataSource.manager.getRepository(SchoolClass)
  }

  async create(data: ICreateSchoolClass): Promise<SchoolClass> {
    const school_class = this.ormRepository.create(data)

    await this.ormRepository.save(school_class)

    return school_class
  }


  async get(): Promise<SchoolClass[]> {
    const school_class = this.ormRepository.find({
      relations: {
        school: true,
        teacher: true,
        students: true,
      }
    })

    return school_class
  }
}

export default SchoolClassRepository