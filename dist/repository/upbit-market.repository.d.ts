import { UpbitClient } from "../client/UpbitClient";
import type { UpbitMarket } from "../types/upbit-market.type";
export declare class UpbitMarketRepository {
    private client;
    constructor(client: UpbitClient);
    private basepath;
    /** 2025.05.30. v1.5.7
     * 업비트에서 거래 가능한 모든 마켓 목록을 조회합니다.
     *
     * @param isDetails - 상세 정보 포함 여부 (기본값: true)
     * @returns {UpbitMarket[]} 마켓 정보 배열
     *
     * @see https://docs.upbit.com/kr/reference/%EB%A7%88%EC%BC%93-%EC%BD%94%EB%93%9C-%EC%A1%B0%ED%9A%8C
     */
    listAll(isDetails?: boolean): Promise<UpbitMarket[]>;
}
