import { UpbitClient } from "../client/UpbitClient";
import type { UpbitTicker } from "../types/upbit-ticker.type";

export class UpbitTickerRepository {
  constructor(private client: UpbitClient) {}
  private basepath = "ticker";

  /** 2025.06.10 . v1.5.7
   * 업비트에서 요청 당시 종목의 스냅샷을 반환합니다.
   *
   * @param markets - 반점으로 구분되는 종목 코드 (ex. KRW-BTC, BTC-ETH)
   * @returns {UpbitTicker[]} 종목 티커 정보 배열
   *
   * @see https://docs.upbit.com/kr/reference/ticker%ED%98%84%EC%9E%AC%EA%B0%80-%EC%A0%95%EB%B3%B4
   */
  async getTicker(markets: string): Promise<UpbitTicker[]> {
    const path = `${this.basepath}`;
    return this.client.call(path, "GET", { markets });
  }
}
