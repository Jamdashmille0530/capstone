import { prisma } from "./utils/db";
import express from "express";
import cors from "cors";

import userRoute from "./routes/users.routes";
import authRoute from "./routes/auth.routes";

const app = express();

const server = async () => {
  app.use(express.json());
  app.use(cors({ origin: "http://localhost:3000", credentials: true }));

  // Routes
  app.use("/api/user", userRoute);
  app.use("/api/auth", authRoute);

  // Testing
  app.get("/api/healthchecker", (_, res) => {
    res.status(200).json({
      status: "success",
      message: "Welcome to NodeJs with Prisma and PostgreSQL",
    });
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () =>
    console.log(`🚀 Server ready at: http://localhost:${PORT}`)
  );
};

server()
  .catch((err) => {
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
