import { upbitAccountRepository } from "../repository/upbit-account.repository";

async function main() {
  try {
    const accounts = await upbitAccountRepository.listAll();
    console.log(`✅ Total accounts: ${accounts.length}`);
    console.table(accounts);
  } catch (error) {
    console.error("❌ Failed to fetch accounts:", error);
  }
}

main();
