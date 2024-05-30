import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { carCreateBodyMock, carCreateListMock } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("Unit test: get many cars", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });
    test("get many cars should work correctly", async () => {
        const carServices = new CarServices();
        await prisma.car.createMany({ data: carCreateListMock });
        const data = await carServices.findMany();
        expect(data).toHaveLength(carCreateListMock.length);
        carDefaultExpects(data[0], carCreateListMock[0]);
        carDefaultExpects(data[1], carCreateListMock[1]);
        carDefaultExpects(data[2], carCreateListMock[2]);
    });
});
