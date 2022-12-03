import { Router } from "express";
import schoolRouter from "../../modules/schools/infra/http/routes/school.routes";

const routes = Router();

routes.use('/school', schoolRouter);

export default routes;