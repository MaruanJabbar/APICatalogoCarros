import { prisma } from "../../database/prisma";
import { TCar } from "../../schemas/car.schemas";
import { carCreateBodyMock, carCreateListMock } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: get many car", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });
    test("should be able to get many product should work correctly", async () => {
        await prisma.car.createMany({ data: carCreateListMock });
        const data = await request
            .get("/cars")
            .expect(200)
            .then((response) => response.body);
        expect(data).toHaveLength(3);
        expect(data[0].id).toBeDefined();
        carDefaultExpects(data[0], carCreateListMock[0]);
        carDefaultExpects(data[1], carCreateListMock[1]);
        carDefaultExpects(data[2], carCreateListMock[2]);
    });
    test("should be able to get one product should work correctly", async () => {
        await prisma.car.createMany({ data: carCreateListMock });
        const carList = await prisma.car.findMany();
        const data = await request
            .get(`/cars/${carList[0].id}`)
            .expect(200)
            .then((response) => response.body);
        expect(data.id).toBeDefined();
        carDefaultExpects(data, carList[0] as TCar);
    });
});
