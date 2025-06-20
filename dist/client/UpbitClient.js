"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpbitClient = void 0;
// import { upbitConfig } from "../config/upbit-config";
const uuid_1 = require("uuid");
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UpbitClient {
    constructor(upbitConfig) {
        this.upbitConfig = upbitConfig;
        this.baseUrl = this.upbitConfig.server_url;
    }
    genToken(queryParams) {
        const payload = {
            access_key: this.upbitConfig.access_key,
            nonce: (0, uuid_1.v4)(),
        };
        if (Object.keys(queryParams).length > 0) {
            const queryString = new URLSearchParams(Object.keys(queryParams)
                .sort()
                .reduce((acc, key) => {
                acc[key] = queryParams[key];
                return acc;
            }, {})).toString();
            const queryHash = crypto_1.default
                .createHash("sha512")
                .update(queryString, "utf-8")
                .digest("hex");
            payload.query_hash = queryHash;
            payload.query_hash_alg = "SHA512";
        }
        return jsonwebtoken_1.default.sign(payload, this.upbitConfig.secret_key);
    }
    call(path_1, method_1) {
        return __awaiter(this, arguments, void 0, function* (path, method, queryParams = {}) {
            const token = this.genToken(queryParams);
            const url = new URL(path, this.baseUrl);
            if (Object.keys(queryParams).length > 0) {
                Object.entries(queryParams).forEach(([key, value]) => url.searchParams.append(key, String(value)));
            }
            const response = yield fetch(url.href, {
                method,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                const error = new Error();
                error.name = "UpbitApiError";
                error.message = `Upbit API call failed: ${response.statusText} ${response.text()}`;
                error.stack = `Status ${response.status}, URL ${url.href}`;
                throw error;
            }
            return yield response.json();
        });
    }
}
exports.UpbitClient = UpbitClient;
//# sourceMappingURL=UpbitClient.js.map