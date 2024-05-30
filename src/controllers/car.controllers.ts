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
    async findOne(req: Request, res: Response) {
        const carServices = new CarServices();
        const response = await carServices.findOne(req.params.id);
        return res.status(200).json(response);
    }
    async update(req: Request, res: Response) {}
    async delete(req: Request, res: Response) {}
}
