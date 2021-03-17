import express from "express";
import { serve, setup } from "swagger-ui-express";

import { swaggerConfig } from "./docs";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", serve, setup(swaggerConfig));
app.use("/users", usersRoutes);

export { app };
