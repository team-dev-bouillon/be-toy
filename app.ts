import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter";
import productRouter from "./routes/productRouter";

dotenv.config();
if (!process.env.PORT) process.exit(1);
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  // 최후의 보루 에러방지 비동기 오류는 잡지 못함
  res.status(500).send({
    message: "Server Error",
    error: err,
  });
});

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
