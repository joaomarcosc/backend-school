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

  async list(id?: string): Promise<Students | Students[]> {
    if (id) {
      const students = await this.ormRepository.findOne({
        where: { id },
        relations: {
          school_class: true,
        }
      })

      return students
    }
    const students = await this.ormRepository.find({
      relations: {
        school_class: true,
        grade: true
      }
    })

    return students
  }
}

export default StudentsRepository