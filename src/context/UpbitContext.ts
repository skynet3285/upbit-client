import { UpbitClient } from "../client/UpbitClient";
import { UpbitMarketRepository } from "../repository/upbit-market.repository";
import { UpbitAccountRepository } from "../repository/upbit-account.repository";
import { UpbitTickerRepository } from "../repository/upbit-ticker.repository";
import type { UpbitConfig } from "../config/upbit-config";
import { UpbitCandleRepository } from "../repository/upbit-candle.repository";

export class UpbitContext {
  private readonly client: UpbitClient;

  readonly marketRepository: UpbitMarketRepository;
  readonly accountRepository: UpbitAccountRepository;
  readonly tickerRepository: UpbitTickerRepository;
  readonly candleRepository: UpbitCandleRepository;

  constructor(config: UpbitConfig) {
    this.client = new UpbitClient(config);

    this.marketRepository = new UpbitMarketRepository(this.client);
    this.accountRepository = new UpbitAccountRepository(this.client);
    this.tickerRepository = new UpbitTickerRepository(this.client);
    this.candleRepository = new UpbitCandleRepository(this.client);
  }
}
