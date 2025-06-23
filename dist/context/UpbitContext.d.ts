import { UpbitMarketRepository } from "../repository/upbit-market.repository";
import { UpbitAccountRepository } from "../repository/upbit-account.repository";
import { UpbitTickerRepository } from "../repository/upbit-ticker.repository";
import type { UpbitConfig } from "../config/upbit-config";
import { UpbitCandleRepository } from "../repository/upbit-candle.repository";
export declare class UpbitContext {
    private readonly client;
    readonly marketRepository: UpbitMarketRepository;
    readonly accountRepository: UpbitAccountRepository;
    readonly tickerRepository: UpbitTickerRepository;
    readonly candleRepository: UpbitCandleRepository;
    constructor(config: UpbitConfig);
}
