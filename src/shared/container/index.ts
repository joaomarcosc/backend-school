import { container } from "tsyringe";
import SchoolRepository from "../../modules/schools/infra/typeorm/repositories/SchoolRepository";
import type { ISchoolRepository } from "../../modules/schools/repositories";

container.registerSingleton<ISchoolRepository>(
  'SchoolRepository',
  SchoolRepository
)