import express from "express";
import cors from "cors";
import { orderRouter } from "./Routes/Order";
import { klineRouter } from "./Routes/Kline";
import { tradesRouter } from "./Routes/trades";
import { depthRouter } from "./Routes/Depth";
import { tickerRouter } from "./Routes/Ticker";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/order", orderRouter);
app.use("/api/v1/depth", depthRouter);
app.use("/api/v1/trades", tradesRouter);
app.use("/api/v1/klines", klineRouter);
app.use("/api/v1/ticker", tickerRouter);

app.listen(3000, () => {
  console.log(`port running on 3000`);
});
