import { UpbitMarketRepository } from "../repository/upbit-market.repository";
import { UpbitAccountRepository } from "../repository/upbit-account.repository";
import { UpbitTickerRepository } from "../repository/upbit-ticker.repository";
import type { UpbitConfig } from "../config/upbit-config";
export declare class UpbitContext {
    private readonly client;
    readonly marketRepository: UpbitMarketRepository;
    readonly accountRepository: UpbitAccountRepository;
    readonly tickerRepository: UpbitTickerRepository;
    constructor(config: UpbitConfig);
}
