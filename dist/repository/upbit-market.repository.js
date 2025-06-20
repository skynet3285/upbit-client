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
exports.UpbitMarketRepository = void 0;
class UpbitMarketRepository {
    constructor(client) {
        this.client = client;
        this.basepath = "market";
    }
    /** 2025.05.30. v1.5.7
     * 업비트에서 거래 가능한 모든 마켓 목록을 조회합니다.
     *
     * @param isDetails - 상세 정보 포함 여부 (기본값: true)
     * @returns {UpbitMarket[]} 마켓 정보 배열
     *
     * @see https://docs.upbit.com/kr/reference/%EB%A7%88%EC%BC%93-%EC%BD%94%EB%93%9C-%EC%A1%B0%ED%9A%8C
     */
    listAll() {
        return __awaiter(this, arguments, void 0, function* (isDetails = false) {
            const path = `${this.basepath}/all`;
            return this.client.call(path, "GET", { isDetails });
        });
    }
}
exports.UpbitMarketRepository = UpbitMarketRepository;
//# sourceMappingURL=upbit-market.repository.js.map