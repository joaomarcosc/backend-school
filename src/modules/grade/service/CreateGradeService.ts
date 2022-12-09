import { inject, injectable } from "tsyringe";
import Grade from "../infra/typeorm/entities/Grade";
import { IGradeRepository } from "../repository";
import { IRequestParams } from "../types/IGradeRepository";

@injectable()
class CreateGradeService {
  constructor(
    @inject("GradeRepository") private gradeRepository: IGradeRepository
  ) { }

  async execute(request: IRequestParams): Promise<Grade> {
    const grade = this.gradeRepository.create(request)

    return grade
  }
}

export default CreateGradeService