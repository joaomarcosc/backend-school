import { Router } from "express";
import schoolRouter from "../../modules/schools/infra/http/routes/school.routes";
import schoolClassRouter from "../../modules/school_class/infra/http/routes/school_class.routes";
import teacherRouter from "../../modules/teacher/infra/http/routes/teacher.routes";

const routes = Router();

routes.use('/school', schoolRouter);
routes.use('/school-class', schoolClassRouter)
routes.use('/teacher', teacherRouter)

export default routes;