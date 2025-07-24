import express from "express";
import cors from "cors";
import connectDB from "./src/common/config/db";
import { HOST, PORT } from "./src/common/config/environments";
connectDB();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
  console.log(`Swagger Docs available at http://${HOST}:${PORT}/api-docs`);
});
