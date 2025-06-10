import { upbitTickerRepository } from "../repository/upbit-ticker.repository";

async function main() {
  try {
    const marketCodes = ["KRW-BTC", "KRW-ETH"];

    marketCodes.forEach(async (marketCode) => {
      const ticker = await upbitTickerRepository.getTicker(marketCode);
      console.log("✅ Upbit Ticker Snapshot:");
      console.table(ticker);
    });
  } catch (error) {
    console.error("❌ Failed to fetch ticker:", error);
  }
}

main();
