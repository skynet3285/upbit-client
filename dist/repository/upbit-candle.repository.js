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
exports.UpbitCandleRepository = void 0;
class UpbitCandleRepository {
    constructor(client) {
        this.client = client;
        this.basepath = "candles";
    }
    /** 2025.06.23. v1.5.7
     * 일봉 캔들 데이터를 조회합니다.
     *
     * @param market - 마켓 코드 (예: KRW-BTC)
     * @param to - 마지막 캔들 시각 (exclusive). ISO8061 포맷 (yyyy-MM-dd'T'HH:mm:ss'Z' or yyyy-MM-dd HH:mm:ss). 비우면 최근 캔들부터 조회
     * @param count - 조회할 캔들 개수 (기본값 5, 최대 200)
     * @param convertingPriceUnit - 종가 환산 화폐 단위 (예: KRW). 생략 가능
     * @returns {DayCandle[]} 일봉 캔들 데이터 배열
     *
     * @see https://docs.upbit.com/kr/reference/%EC%9D%BCday-%EC%BA%94%EB%93%A4-1
     */
    listDays(market_1) {
        return __awaiter(this, arguments, void 0, function* (market, to = null, count = 5, convertingPriceUnit = null) {
            const params = { market, count };
            if (to)
                params.to = to;
            if (count > 200)
                count = 200;
            if (count < 1)
                count = 1;
            if (convertingPriceUnit)
                params.converting_price_unit = convertingPriceUnit;
            return this.client.call(this.basepath + "/days", "GET", params);
        });
    }
    /** 2025.06.23. v1.5.7
     * 주봉 캔들 데이터를 조회합니다.
     *
     * @param market - 마켓 코드 (예: KRW-BTC)
     * @param to - 마지막 캔들 시각 (exclusive). ISO8061 포맷 (yyyy-MM-dd'T'HH:mm:ss'Z' or yyyy-MM-dd HH:mm:ss). 비우면 최근 캔들부터 조회
     * @param count - 조회할 캔들 개수 (기본값 5, 최대 200)
     * @returns {DayCandle[]} 주봉 캔들 데이터 배열
     *
     * @see https://docs.upbit.com/kr/reference/%EC%A3%BCweek-%EC%BA%94%EB%93%A4-1
     */
    listWeeks(market_1) {
        return __awaiter(this, arguments, void 0, function* (market, to = null, count = 5) {
            const params = { market, count };
            if (to)
                params.to = to;
            if (count > 200)
                count = 200;
            if (count < 1)
                count = 1;
            return this.client.call(this.basepath + "/weeks", "GET", params);
        });
    }
    /** 2025.06.23. v1.5.7
     * 월봉 캔들 데이터를 조회합니다.
     * @param market - 마켓 코드 (예: KRW-BTC)
     * @param to - 마지막 캔들 시각 (exclusive). ISO8061 포맷 (yyyy-MM-dd'T'HH:mm:ss'Z' or yyyy-MM-dd HH:mm:ss). 비우면 최근 캔들부터 조회
     * @param count - 조회할 캔들 개수 (기본값 5, 최대 200)
     * @returns {MonthCandle[]} 월봉 캔들 데이터 배열
     * @see https://docs.upbit.com/kr/reference/%EC%9B%94month-%EC%BA%94%EB%93%A4-1
     */
    listMonths(market_1) {
        return __awaiter(this, arguments, void 0, function* (market, to = null, count = 5) {
            const params = { market, count };
            if (to)
                params.to = to;
            if (count > 200)
                count = 200;
            if (count < 1)
                count = 1;
            return this.client.call(this.basepath + "/months", "GET", params);
        });
    }
}
exports.UpbitCandleRepository = UpbitCandleRepository;
//# sourceMappingURL=upbit-candle.repository.js.map