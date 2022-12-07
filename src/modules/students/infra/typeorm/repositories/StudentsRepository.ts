import { singleton } from "tsyringe";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../configs/ormconfig";
import { IStudentsRepository } from "../../../repositories";
import { IRequestParams } from "../../../types/IRequestParams";
import Students from "../entities/Students";

@singleton()
class StudentsRepository implements IStudentsRepository {
  private ormRepository: Repository<Students>

  constructor() {
    this.ormRepository = AppDataSource.manager.getRepository(Students)
  }

  async create(data: IRequestParams): Promise<Students> {
    const students = this.ormRepository.create(data)

    await this.ormRepository.save(students)

    return students
  }
}

export default StudentsRepository