import { prisma } from "../../database/prisma";
import { carCreateBodyMock } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: create car", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });
    test("should be able to create product should work correctly", async () => {
        const data = await request
            .post("/cars")
            .send(carCreateBodyMock)
            .expect(201)
            .then((response) => response.body);
        expect(data.id).toBeDefined();
        carDefaultExpects(data, carCreateBodyMock);
    });
});
