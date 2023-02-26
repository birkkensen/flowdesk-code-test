export type TickerSymbol = {
  symbol: string;
  status: string;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  quoteAssetPrecision: number;
  orderTypes: string[];
  icebergAllowed: true;
  ocoAllowed: true;
  quoteOrderQtyMarketAllowed: true;
  allowTrailingStop: false;
  cancelReplaceAllowed: false;
  isSpotTradingAllowed: true;
  isMarginTradingAllowed: true;
  filters: [];
  permissions: string[];
  defaultSelfTradePreventionMode: string;
  allowedSelfTradePreventionModes: string[];
};

export type ExchangeInfo = {
  timezone: string;
  serverTime: number;
  rateLimits?: [];
  exchangeFilters?: [];
  symbols: TickerSymbol[];
};

export type TickerPrice = {
  symbol: string;
  price: string;
};

export type Ticker24Hr = {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  bidQty: string;
  askPrice: string;
  askQty: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
};

export type TickerStatsFull = TickerPrice & Ticker24Hr;

export type Trade = {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
};
