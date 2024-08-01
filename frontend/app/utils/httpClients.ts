import axios from "axios";
import { Depth, Klines, Ticker, Trades } from "./types";

const baseUrl = "https://exchange-proxy.100xdevs.com/api/v1";

export async function getTicker(market: string): Promise<Ticker> {
  const tickers = await getTickers();
  const ticker = tickers.find((t) => t.symbol === market);
  if (!ticker) {
    throw new Error(`No ticker found for ${market}`);
  }
  return ticker;
}
export async function getTickers(): Promise<Ticker[]> {
  const res = await axios.get(`${baseUrl}/tickers`);
  return res.data;
}
export async function getDepth(market: string): Promise<Depth> {
  const res = await axios.get(`${baseUrl}/trades?symbol=${market}`);
  return res.data;
}
export async function getKlines(
  market: string,
  interval: string,
  startTime: string,
  endTime: string
): Promise<Klines[]> {
  const res = await axios.get(
    `${baseUrl}/klines?symbol=${market}&interval=${interval}$startTime=${startTime}&endTime=${endTime}`
  );
  const data: Klines[] = res.data;
  return data.sort((x, y) => (Number(x.end) < Number(y.end) ? -1 : 1));
}
export async function getTrades(market: string): Promise<Trades[]> {
  const response = await axios.get(`${baseUrl}/trades?symbol=${market}`);
  return response.data;
}

export async function getMarkets(): Promise<string[]> {
  const response = await axios.get(`${baseUrl}/markets`);
  return response.data;
}
