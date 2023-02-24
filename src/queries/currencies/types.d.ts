type TickerSymbol = {
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
