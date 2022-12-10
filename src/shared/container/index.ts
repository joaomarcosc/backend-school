import { container } from "tsyringe";
import GradeRepository from "../../modules/grade/infra/typeorm/repositories/GradeRepository";
import { IGradeRepository } from "../../modules/grade/repository";
import SchoolRepository from "../../modules/schools/infra/typeorm/repositories/SchoolRepository";
import type { ISchoolRepository } from "../../modules/schools/repositories";
import SchoolClassRepository from "../../modules/school_class/infra/typeorm/repositories/SchoolClassRepository";
import { ISchoolClassRepository } from "../../modules/school_class/repositories";
import StudentsRepository from "../../modules/students/infra/typeorm/repositories/StudentsRepository";
import { IStudentsRepository } from "../../modules/students/repositories";
import TeacherRepository from "../../modules/teacher/infra/typeorm/repositories/TeacherRepository";
import { ITeacherRepository } from "../../modules/teacher/respositories";

container.registerSingleton<ISchoolRepository>(
  'SchoolRepository',
  SchoolRepository
)

container.registerSingleton<ISchoolClassRepository>(
  'SchoolClassRepository',
  SchoolClassRepository
)

container.registerSingleton<ITeacherRepository>(
  'TeacherRepository',
  TeacherRepository
)

container.registerSingleton<IStudentsRepository>(
  'StudentsRepository',
  StudentsRepository
)

container.registerSingleton<IGradeRepository>(
  'GradeRepository',
  GradeRepository
)