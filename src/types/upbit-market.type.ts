export interface UpbitMarketCaution {
  PRICE_FLUCTUATIONS: boolean;
  TRADING_VOLUME_SOARING: boolean;
  DEPOSIT_AMOUNT_SOARING: boolean;
  GLOBAL_PRICE_DIFFERENCES: boolean;
  CONCENTRATION_OF_SMALL_ACCOUNTS: boolean;
}

export interface UpbitMarketEvent {
  warning: boolean;
  caution: UpbitMarketCaution;
}

export interface UpbitMarket {
  market: string;
  korean_name: string;
  english_name: string;
  market_event?: UpbitMarketEvent; // isDetails=false일 때 존재하지 않는다.
}
