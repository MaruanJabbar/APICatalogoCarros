import { Router } from "express";
import { CarControllers } from "../controllers/car.controllers";

export const carRouter = Router();

const carControllers = new CarControllers();

carRouter.post("/", carControllers.create);
carRouter.get("/", carControllers.findMany);
carRouter.get("/:id", carControllers.findOne);
carRouter.patch("/:id", carControllers.update);
carRouter.delete("/:id", carControllers.delete);
