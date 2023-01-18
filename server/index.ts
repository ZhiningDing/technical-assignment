import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import statusRouter from "./router/status";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "5mb" }));
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.set("trust proxy", 1);

app.use("/status", statusRouter);

app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT}`);
});
