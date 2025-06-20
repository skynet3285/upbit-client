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
            const { accountRepository, marketRepository, tickerRepository, } = (0, createUpbitContext_1.createUpbitContext)(upbitConfig);
            const accounts = yield accountRepository.listAll();
            console.log(`✅ : ${accounts.length}`);
            console.log(accounts.slice(0, 5));
        }
        catch (err) {
            console.error("❌ Failed to fetch :", err);
        }
    });
}
main();
//# sourceMappingURL=1-how-to-use-upbit-context.js.map