import { Endpoints } from "../../endpoints";
import { AuthResponse, RefreshTokenRequest } from "../../models";
import { APIResponse, networkManager } from "../../network";
import { IAuthService } from "./interface";

class AuthService implements IAuthService {
    
    async login(email: string, password: string): Promise<APIResponse<AuthResponse>> {
        return await networkManager.post<AuthResponse>({ endpoint: Endpoints.authentication.auth, data: { email, password } });
    }

    async signup(fullName: string, email: string, phone: string, password: string): Promise<APIResponse<AuthResponse>> {
        return await networkManager.post<AuthResponse>({ endpoint: Endpoints.authentication.signup, data: { fullName, email, phone, password } });
    }

    async logout(): Promise<APIResponse<undefined>> {
        return await networkManager.post<undefined>({ endpoint: Endpoints.authentication.logout });
    }
    
    async refreshToken(refreshTokenRequest: RefreshTokenRequest): Promise<APIResponse<AuthResponse>> {
        return await networkManager.post<AuthResponse>({ endpoint: Endpoints.authentication.refreshToken, data: refreshTokenRequest});
    }
}

const authService: IAuthService = new AuthService();
export { authService };