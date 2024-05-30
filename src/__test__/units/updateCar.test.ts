import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { carCreateBodyMock, carUpdatedBodyMock } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("Unit test: update cars", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });
    test("update cars should work correctly", async()=>{
        const carServices = new CarServices();
        const car = await prisma.car.create({data: carCreateBodyMock})
        const data = await carServices.update(car.id, carUpdatedBodyMock )
        carDefaultExpects(data, carUpdatedBodyMock)
    })
});
