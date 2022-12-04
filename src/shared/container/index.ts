import { container } from "tsyringe";
import SchoolRepository from "../../modules/schools/infra/typeorm/repositories/SchoolRepository";
import type { ISchoolRepository } from "../../modules/schools/repositories";
import SchoolClassRepository from "../../modules/school_class/infra/typeorm/repositories/SchoolClassRepository";
import { ISchoolClassRepository } from "../../modules/school_class/repositories";

container.registerSingleton<ISchoolRepository>(
  'SchoolRepository',
  SchoolRepository
)

container.registerSingleton<ISchoolClassRepository>(
  'SchoolClassRepository',
  SchoolClassRepository
)