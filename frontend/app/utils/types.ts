export interface Klines {
  close: string;
  end: string;
  high: string;
  low: string;
  open: string;
  quoteVolune: string;
  start: string;
  trades: string;
  vloume: string;
}

export interface Trades {
  id: number;
  isBuyerMaker: boolean;
  quantiy: string;
  quoteQuanity: string;
  timestamp: number;
}

export interface Depth {
  bids: [string, string][];
  asks: [string, string][];
  lastUpdateId: string;
}

export interface Ticker {
  firstPrice: string;
  high: string;
  lastPrice: string;
  low: string;
  priceChange: string;
  priceChangePercent: string;
  quoteVolume: string;
  symbol: string;
  trades: string;
  volume: string;
}
