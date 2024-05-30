import express, { json } from "express"
import helmet from "helmet";
import { carRouter } from "./routes/car.routes";

export const app = express();

app.use(helmet())
app.use(json())

app.use("/cars", carRouter)