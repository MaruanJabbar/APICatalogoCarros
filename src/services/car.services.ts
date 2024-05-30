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
    findOne(car: TCar): TCar {
        return car;
    }
    async update(id: string, body: TCarUpdate): Promise<TCar> {
        const data = await prisma.car.update({ where: { id }, data: body });
        return data as TCar;
    }
    async delete(id: string): Promise<void> {
        const data = await prisma.car.delete({ where: { id }});
        return;
    }
}
