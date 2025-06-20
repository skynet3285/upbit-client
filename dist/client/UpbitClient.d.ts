import type { UpbitConfig } from "../config/upbit-config";
export declare class UpbitClient {
    private upbitConfig;
    constructor(upbitConfig: UpbitConfig);
    private baseUrl;
    private genToken;
    call(path: string, method: "GET" | "POST" | "DELETE" | "PUT", queryParams?: Record<string, any>): Promise<any>;
}
