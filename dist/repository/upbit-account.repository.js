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
exports.UpbitAccountRepository = void 0;
class UpbitAccountRepository {
    constructor(client) {
        this.client = client;
        this.basePath = "accounts";
    }
    /** 2025.05.30. v1.5.7
     * 보유하고 있는 자산 목록를 조회합니다.
     *
     * @returns {UpbitAccount[]} 자산 정보 배열
     *
     * @see https://docs.upbit.com/kr/reference/%EC%A0%84%EC%B2%B4-%EA%B3%84%EC%A2%8C-%EC%A1%B0%ED%9A%8C
     */
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `${this.basePath}`;
            return this.client.call(path, "GET");
        });
    }
}
exports.UpbitAccountRepository = UpbitAccountRepository;
//# sourceMappingURL=upbit-account.repository.js.map