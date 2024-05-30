import { prisma } from "../../database/prisma";
import { carCreateBodyMock, carCreateListMock, carUpdatedBodyMock } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: update many car", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });
    test("should be able to update correctly", async () => {
        const car = await prisma.car.create({ data: carCreateBodyMock });
        const data = await request
            .patch(`/cars/${car.id}`)
            .send(carUpdatedBodyMock)
            .expect(200)
            .then((response) => response.body);
        expect(data.id).toBeDefined();
        carDefaultExpects(data, carUpdatedBodyMock);
    });

    test("should throw error when car is invalid", async () => {
        const data = await request
            .patch(`/cars/55f9b259-3f31-4e14-95b9-1f63e420d101`)
            .expect(404)
            .then((response) => response.body);
        expect(data.error).toBe("Car not found.");
    });
});
