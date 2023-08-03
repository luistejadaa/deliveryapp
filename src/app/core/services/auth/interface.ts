import { AuthResponse, RefreshTokenRequest } from "../../models";
import { APIResponse } from "../../network/network-manager";

interface IAuthService {
    login: (email: string, password: string) => Promise<APIResponse<AuthResponse>>;
    signup: (fullName: string, email: string, phone: string, password: string) => Promise<APIResponse<AuthResponse>>;
    logout: () => Promise<APIResponse<undefined>>;
    refreshToken: (refreshTokenRequest: RefreshTokenRequest) => Promise<APIResponse<AuthResponse>>;
}

export type { IAuthService };