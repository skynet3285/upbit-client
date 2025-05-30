import { upbitMarketRepository } from "../repository/upbit-market.repository";

async function main() {
  try {
    const markets = await upbitMarketRepository.listAll();
    console.log(`✅ Total markets: ${markets.length}`);
    console.log(markets.slice(0, 5));
  } catch (err) {
    console.error("❌ Failed to fetch market list:", err);
  }
}

main();
