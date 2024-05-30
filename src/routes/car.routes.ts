import { Router } from "express";
import { CarControllers } from "../controllers/car.controllers";
import { ValidadeBody } from "../middleware/validateBody.middleware";
import { carCreateSchema, carUpdateSchema } from "../schemas/car.schemas";

export const carRouter = Router();

const carControllers = new CarControllers();

carRouter.post("/",ValidadeBody.execute(carCreateSchema), carControllers.create);
carRouter.get("/", carControllers.findMany);
carRouter.get("/:id", carControllers.findOne);
carRouter.patch("/:id",ValidadeBody.execute(carUpdateSchema), carControllers.update);
carRouter.delete("/:id", carControllers.delete);
