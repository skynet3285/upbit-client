import "../../env";

if (
  !process.env.UPBIT_OPEN_API_ACCESS_KEY ||
  !process.env.UPBIT_OPEN_API_SECRET_KEY ||
  !process.env.UPBIT_OPEN_API_SERVER_URL
) {
  throw new Error(
    "Missing required environment variables for Upbit API configuration."
  );
}

export interface UpbitConfig {
  access_key: string;
  secret_key: string;
  server_url: string;
}

export const upbitConfig: UpbitConfig = {
  access_key: process.env.UPBIT_OPEN_API_ACCESS_KEY,
  secret_key: process.env.UPBIT_OPEN_API_SECRET_KEY,
  server_url: process.env.UPBIT_OPEN_API_SERVER_URL,
};
