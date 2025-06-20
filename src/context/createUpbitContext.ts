// src/context/createUpbitContext.ts

import { UpbitContext } from "./UpbitContext";
import type { UpbitConfig } from "../config/upbit-config";

export function createUpbitContext(config: UpbitConfig) {
  return new UpbitContext(config);
}
