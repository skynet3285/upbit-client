// import { upbitConfig } from "../config/upbit-config";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import type { UpbitConfig } from "../config/upbit-config";

export class UpbitClient {
  constructor(private upbitConfig: UpbitConfig) {}

  private baseUrl = this.upbitConfig.server_url;

  private genToken(queryParams: Record<string, any>): string {
    const payload: Record<string, any> = {
      access_key: this.upbitConfig.access_key,
      nonce: uuidv4(),
    };

    if (Object.keys(queryParams).length > 0) {
      const queryString = new URLSearchParams(
        Object.keys(queryParams)
          .sort()
          .reduce((acc, key) => {
            acc[key] = queryParams[key];
            return acc;
          }, {} as Record<string, string>)
      ).toString();

      const queryHash = crypto
        .createHash("sha512")
        .update(queryString, "utf-8")
        .digest("hex");

      payload.query_hash = queryHash;
      payload.query_hash_alg = "SHA512";
    }

    return jwt.sign(payload, this.upbitConfig.secret_key);
  }

  async call(
    path: string,
    method: "GET" | "POST" | "DELETE" | "PUT",
    queryParams: Record<string, any> = {}
  ) {
    const token = this.genToken(queryParams);

    const url = new URL(path, this.baseUrl);
    if (Object.keys(queryParams).length > 0) {
      Object.entries(queryParams).forEach(([key, value]) =>
        url.searchParams.append(key, String(value))
      );
    }

    const response = await fetch(url.href, {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = new Error();

      error.name = "UpbitApiError";
      error.message = `Upbit API call failed: ${
        response.statusText
      } ${response.text()}`;
      error.stack = `Status ${response.status}, URL ${url.href}`;

      throw error;
    }

    return await response.json();
  }
}
