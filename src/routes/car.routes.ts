import { Router } from "express";
import { CarControllers } from "../controllers/car.controllers";
import { ValidadeBody } from "../middleware/validateBody.middleware";
import { carCreateSchema, carUpdateSchema } from "../schemas/car.schemas";
import { IsCarIdValid } from "../middleware/isCarIdValid.middleware";

export const carRouter = Router();

const carControllers = new CarControllers();

carRouter.post("/",ValidadeBody.execute(carCreateSchema), carControllers.create);
carRouter.get("/", carControllers.findMany);
carRouter.get("/:id",IsCarIdValid.execute, carControllers.findOne);
carRouter.patch("/:id",ValidadeBody.execute(carUpdateSchema),IsCarIdValid.execute, carControllers.update);
carRouter.delete("/:id", IsCarIdValid.execute,carControllers.delete);
