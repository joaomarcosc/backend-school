import { inject, injectable } from "tsyringe";
import { QueryFailedError } from "typeorm";
import Grade from "../infra/typeorm/entities/Grade";
import { IGradeRepository } from "../repository";
import { IRequestParams } from "../types/IGradeRepository";

@injectable()
class CreateGradeService {
  constructor(
    @inject("GradeRepository") private gradeRepository: IGradeRepository
  ) { }

  async execute(request: IRequestParams): Promise<Grade> {
    try {
      const grade = this.gradeRepository.create(request)

    return grade
    } catch(e) {
      const error: QueryFailedError = e
      return error as any
    }
  }
}

export default CreateGradeService