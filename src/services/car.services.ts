import { prisma } from "../database/prisma";
import { TCar, TCarCreate, TCarUpdate } from "../schemas/car.schemas";

export class CarServices {
    async create(body: TCarCreate): Promise<TCar> {
        const data = await prisma.car.create({ data: body });
        return data as TCar;
    }
    async findMany(): Promise<TCar[]> {
        const data = await prisma.car.findMany();
        return data as TCar[];
    }
    async findOne(id: string): Promise<TCar> {
        const data = await prisma.car.findFirst({ where: { id } });
        return data as TCar;
    }
    async update(id: string, body: TCarUpdate): Promise<TCar> {
        const data = await prisma.car.update({ where: { id }, data: body });
        return data as TCar;
    }
    async delete() {}
}
