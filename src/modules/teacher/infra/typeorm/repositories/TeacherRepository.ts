import { singleton } from "tsyringe";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../configs/ormconfig";
import { ITeacherRepository } from "../../../respositories";
import { ICreateTeacher } from "../../../types/ICreateTeacher";
import Teacher from "../entities/Teacher";

@singleton()
class TeacherRepository implements ITeacherRepository {
  private ormRepository: Repository<Teacher>

  constructor() {
    this.ormRepository = AppDataSource.manager.getRepository(Teacher)
  }

  async create(data: ICreateTeacher): Promise<Teacher> {
    const teacher = this.ormRepository.create(data)

    await this.ormRepository.save(teacher)

    return teacher
  }

  async list(id?: string): Promise<Teacher | Teacher[]> {
    if (id) {
      const teacher = await this.ormRepository.findOne({
        where: { id },
        relations: {
          class_school:  true
        }
      })

      return teacher
    }
    const teacher = await this.ormRepository.find({
      relations: {
        class_school:  true
      }
    })

    return teacher   
  }
}

export default TeacherRepository