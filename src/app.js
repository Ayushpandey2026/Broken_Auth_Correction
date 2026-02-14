import express from "express";
import cors from "cors";
import { ENV } from "./config/env.js";

import healthRoutes from "./routes/health.routes.js";
import documentRoutes from "./routes/documents.routes.js";
import qaRoutes from "./routes/qa.routes.js";

const app = express();

app.use(
  cors({
    origin: ENV.FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true
  })
);
app.use(express.json());

app.use("/health", healthRoutes);
app.use("/documents", documentRoutes);
app.use("/qa", qaRoutes);

export default app;
