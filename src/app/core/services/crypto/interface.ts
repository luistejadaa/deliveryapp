import { HandShakeResponse, SessionKeys } from "../../models";
import { APIResponse } from "../../network";

interface ICryptoService {
    makeHandshake: (publicKey: string) => Promise<APIResponse<HandShakeResponse>>;
    generateAppKey: () => SessionKeys;
    encrypt: (data: string) => Promise<string>;
    decrypt: (data: string) => Promise<string>;
}

export type { ICryptoService };
