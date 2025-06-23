import { createUpbitContext } from "../context/createUpbitContext";
import type { UpbitContext } from "../context/UpbitContext";

async function main() {
  try {
    const upbitConfig = {
      access_key: "type_your_access_key_here",
      secret_key: "type_your_secret_key_here",
      server_url: "https://api.upbit.com/v1/",
    };

    const {
      accountRepository,
      candleRepository,
      marketRepository,
      tickerRepository,
    }: UpbitContext = createUpbitContext(upbitConfig);

    const accounts = await accountRepository.listAll();
    console.log(`✅ Accounts : ${accounts.length}`);
    console.log(accounts.slice(0, 5));

    for (const account of accounts) {
      if (account.currency === "KRW") continue;

      console.log(`🔍 Fetching data for account: ${account.currency}`);
      const currencies = account.unit_currency + "-" + account.currency;
      const candleDays = await candleRepository.listDays(currencies, null, 2);
      console.log(`✅ Candle Days : ${candleDays.length}`);
      console.log(candleDays.slice(0, 5));

      const candleMonths = await candleRepository.listMonths(
        currencies,
        null,
        2
      );
      console.log(`✅ Candle Months : ${candleMonths.length}`);
      console.log(candleMonths.slice(0, 5));
      console.log("--------------------------------");
    }
  } catch (err) {
    console.error("❌ Failed to fetch :", err);
  }
}

main();
