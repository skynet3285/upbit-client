import type { UpbitConfig } from "./upbit-config";

describe("Upbit API Configuration", () => {
  let upbitConfig: UpbitConfig;

  beforeAll(() => {
    try {
      upbitConfig = require("./upbit-config").upbitConfig;
    } catch (error) {
      throw new Error(
        `Failed to load upbitConfig: ${(error as Error).message}`
      );
    }
  });

  test("should export upbitConfig with correct structure", () => {
    expect(upbitConfig).toHaveProperty("access_key");
    expect(upbitConfig).toHaveProperty("secret_key");
    expect(upbitConfig).toHaveProperty("server_url");

    expect(typeof upbitConfig.access_key).toBe("string");
    expect(typeof upbitConfig.secret_key).toBe("string");
    expect(typeof upbitConfig.server_url).toBe("string");
  });
});
