"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpbitContext = void 0;
const UpbitClient_1 = require("../client/UpbitClient");
const upbit_market_repository_1 = require("../repository/upbit-market.repository");
const upbit_account_repository_1 = require("../repository/upbit-account.repository");
const upbit_ticker_repository_1 = require("../repository/upbit-ticker.repository");
const upbit_candle_repository_1 = require("../repository/upbit-candle.repository");
class UpbitContext {
    constructor(config) {
        this.client = new UpbitClient_1.UpbitClient(config);
        this.marketRepository = new upbit_market_repository_1.UpbitMarketRepository(this.client);
        this.accountRepository = new upbit_account_repository_1.UpbitAccountRepository(this.client);
        this.tickerRepository = new upbit_ticker_repository_1.UpbitTickerRepository(this.client);
        this.candleRepository = new upbit_candle_repository_1.UpbitCandleRepository(this.client);
    }
}
exports.UpbitContext = UpbitContext;
//# sourceMappingURL=UpbitContext.js.map