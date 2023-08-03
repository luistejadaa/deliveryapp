import { Endpoints } from "../../endpoints";
import { AuthResponse, RefreshTokenRequest, UserProfile } from "../../models";
import { APIResponse, networkManager } from "../../network";
import { IAuthService } from "./interface";

class AuthService implements IAuthService {
    
    login = async (email: string, password: string): Promise<APIResponse<AuthResponse>> => {
        return await networkManager.post<AuthResponse>({ endpoint: Endpoints.authentication.auth, data: { email, password } });
    }

    signup = async (fullName: string, email: string, phone: string, password: string): Promise<APIResponse<AuthResponse>> => {
        return await networkManager.post<AuthResponse>({ endpoint: Endpoints.authentication.signup, data: { fullName, email, phone, password } });
    }

    logout = async (): Promise<APIResponse<undefined>> => {
        return await networkManager.post<undefined>({ endpoint: Endpoints.authentication.logout });
    }
    
    refreshToken = async (refreshTokenRequest: RefreshTokenRequest): Promise<APIResponse<AuthResponse>> => {
        return await networkManager.post<AuthResponse>({ endpoint: Endpoints.authentication.refreshToken, data: refreshTokenRequest});
    }

    getUserProfile = async (): Promise<APIResponse<UserProfile>> => {
        return await networkManager.get<UserProfile>({ endpoint: Endpoints.authentication.profile });
    }
}

const authService: IAuthService = new AuthService();
export { authService };