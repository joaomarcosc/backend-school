import { singleton } from "tsyringe";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../configs/ormconfig";
import { IGradeRepository } from "../../../repository";
import { IRequestParams } from "../../../types/IGradeRepository";
import Grade from "../entities/Grade";


@singleton()
class GradeRepository implements IGradeRepository {
  private ormRepository: Repository<Grade>
  constructor() {
    this.ormRepository = AppDataSource.getRepository(Grade)
  }

  async create(request: IRequestParams): Promise<Grade> {
    const grade = this.ormRepository.create(request)

    await this.ormRepository.save(grade)

    return grade
  }
}

export default GradeRepository