"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUpbitContext_1 = require("../context/createUpbitContext");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const upbitConfig = {
                access_key: "type_your_access_key_here",
                secret_key: "type_your_secret_key_here",
                server_url: "https://api.upbit.com/v1/",
            };
            const { accountRepository, candleRepository, marketRepository, tickerRepository, } = (0, createUpbitContext_1.createUpbitContext)(upbitConfig);
            const accounts = yield accountRepository.listAll();
            console.log(`✅ Accounts : ${accounts.length}`);
            console.log(accounts.slice(0, 5));
            for (const account of accounts) {
                if (account.currency === "KRW")
                    continue;
                console.log(`🔍 Fetching data for account: ${account.currency}`);
                const currencies = account.unit_currency + "-" + account.currency;
                const candleDays = yield candleRepository.listDays(currencies, null, 2);
                console.log(`✅ Candle Days : ${candleDays.length}`);
                console.log(candleDays.slice(0, 5));
                const candleMonths = yield candleRepository.listMonths(currencies, null, 2);
                console.log(`✅ Candle Months : ${candleMonths.length}`);
                console.log(candleMonths.slice(0, 5));
                console.log("--------------------------------");
            }
        }
        catch (err) {
            console.error("❌ Failed to fetch :", err);
        }
    });
}
main();
//# sourceMappingURL=1-how-to-use-upbit-context.js.map