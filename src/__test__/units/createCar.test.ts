import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { carCreateBodyMock } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("Unit test: delete car", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });
    test("delete product should work correctly", async()=>{
        const carServices = new CarServices();
        const data = await carServices.create(carCreateBodyMock);
        expect(data.id).toBeDefined();
        carDefaultExpects(data, carCreateBodyMock)

    })
});
