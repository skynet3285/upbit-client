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
exports.UpbitTickerRepository = void 0;
class UpbitTickerRepository {
    constructor(client) {
        this.client = client;
        this.basepath = "ticker";
    }
    /** 2025.06.10 . v1.5.7
     * 업비트에서 요청 당시 종목의 스냅샷을 반환합니다.
     *
     * @param markets - 반점으로 구분되는 종목 코드 (ex. KRW-BTC, BTC-ETH)
     * @returns {UpbitTicker} 종목 티커
     *
     * @see https://docs.upbit.com/kr/reference/ticker%ED%98%84%EC%9E%AC%EA%B0%80-%EC%A0%95%EB%B3%B4
     */
    getTicker(markets) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `${this.basepath}`;
            return this.client.call(path, "GET", { markets });
        });
    }
}
exports.UpbitTickerRepository = UpbitTickerRepository;
//# sourceMappingURL=upbit-ticker.repository.js.map