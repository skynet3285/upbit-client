import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { upbitConfig } from "../config/upbit-config";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import jwt from "jsonwebtoken";

class UpbitClient {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: upbitConfig.server_url,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  }

  private genToken(queryParams: Record<string, any>): string {
    const payload: Record<string, any> = {
      access_key: upbitConfig.access_key,
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

    return jwt.sign(payload, upbitConfig.secret_key);
  }

  // 2025.05.30. Reference: https://docs.upbit.com/kr/docs/create-authorization-request
  async call(
    path: string,
    method: "GET" | "POST" | "DELETE" | "PUT",
    queryParams: Record<string, any> = {}
  ) {
    const token = this.genToken(queryParams);

    const response = await this.axiosInstance.request({
      url: path,
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: queryParams,
    });

    return response.data;
  }
}

export const upbitClient = new UpbitClient();
