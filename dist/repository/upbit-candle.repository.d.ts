import { UpbitClient } from "../client/UpbitClient";
import type { DayCandle, MonthCandle, WeekCandle } from "../types/upbit-candle.type";
export declare class UpbitCandleRepository {
    private client;
    constructor(client: UpbitClient);
    private basepath;
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
    listDays(market: string, to?: string | null, count?: number, convertingPriceUnit?: string | null): Promise<DayCandle[]>;
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
    listWeeks(market: string, to?: string | null, count?: number): Promise<WeekCandle[]>;
    /** 2025.06.23. v1.5.7
     * 월봉 캔들 데이터를 조회합니다.
     * @param market - 마켓 코드 (예: KRW-BTC)
     * @param to - 마지막 캔들 시각 (exclusive). ISO8061 포맷 (yyyy-MM-dd'T'HH:mm:ss'Z' or yyyy-MM-dd HH:mm:ss). 비우면 최근 캔들부터 조회
     * @param count - 조회할 캔들 개수 (기본값 5, 최대 200)
     * @returns {MonthCandle[]} 월봉 캔들 데이터 배열
     * @see https://docs.upbit.com/kr/reference/%EC%9B%94month-%EC%BA%94%EB%93%A4-1
     */
    listMonths(market: string, to?: string | null, count?: number): Promise<MonthCandle[]>;
}
