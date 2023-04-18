import "express-async-errors";
import express, { Application, json } from "express";
import { handleError } from "./errors";
import userRouter from "./routers/routers";

const app: Application = express();
app.use(json());

app.use("/users", userRouter);

app.use(handleError);

export default app;
