import { Request, Response } from "express";
import { CarServices } from "../services/car.services";

export class CarControllers {
    async create(req: Request, res: Response) {
        const carServices = new CarServices();
        const response = await carServices.create(req.body);
        return res.status(201).json(response);
    }
    async findMany(req: Request, res: Response) {
        const carServices = new CarServices();
        const response = await carServices.findMany();
        return res.status(200).json(response);
    }
    findOne(req: Request, res: Response) {
        const carServices = new CarServices();
        const response = carServices.findOne(res.locals.car);
        return res.status(200).json(response);
    }
    async update(req: Request, res: Response) {
        const carServices = new CarServices();
        const response = await carServices.update(req.params.id, req.body);
        return res.status(200).json(response);
    }
    async delete(req: Request, res: Response) {
        const carServices = new CarServices();
        const response = await carServices.delete(req.params.id);
        return res.status(204).json();
    }
}
