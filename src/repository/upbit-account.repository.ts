import { UpbitClient } from "../client/UpbitClient";
import type { UpbitAccount } from "../types/upbit-account.type";

export class UpbitAccountRepository {
  constructor(private client: UpbitClient) {}

  private basePath = "accounts";

  /** 2025.05.30. v1.5.7
   * 보유하고 있는 자산 목록를 조회합니다.
   *
   * @returns {UpbitAccount[]} 자산 정보 배열
   *
   * @see https://docs.upbit.com/kr/reference/%EC%A0%84%EC%B2%B4-%EA%B3%84%EC%A2%8C-%EC%A1%B0%ED%9A%8C
   */
  async listAll(): Promise<UpbitAccount[]> {
    const path = `${this.basePath}`;
    return this.client.call(path, "GET");
  }
}
