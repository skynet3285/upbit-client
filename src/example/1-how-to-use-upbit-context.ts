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
      marketRepository,
      tickerRepository,
    }: UpbitContext = createUpbitContext(upbitConfig);

    const accounts = await accountRepository.listAll();
    console.log(`✅ : ${accounts.length}`);
    console.log(accounts.slice(0, 5));
  } catch (err) {
    console.error("❌ Failed to fetch :", err);
  }
}

main();
