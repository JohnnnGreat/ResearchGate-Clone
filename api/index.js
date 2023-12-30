import express from "express";
import { connectToDb } from "./connection.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 4400;

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`Server Running at port ${PORT}`);
});
