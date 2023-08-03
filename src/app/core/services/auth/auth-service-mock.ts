import { HttpStatusCode } from "axios";
import { Endpoints } from "../../endpoints";
import { AuthResponse, RefreshTokenRequest } from "../../models";
import { APIResponse, networkManager } from "../../network";
import { IAuthService } from "./interface";
import { generateRandomString } from "../../utils";

class AuthServiceMock implements IAuthService {
    
    async login(email: string, password: string): Promise<APIResponse<AuthResponse>> {
        return {
            status: HttpStatusCode.Ok,
            data: {
                sessionToken: generateRandomString(),
                refreshToken: generateRandomString(),
                expiresIn: 3600,
            }
        }
    }

    async signup(fullName: string, email: string, phone: string, password: string): Promise<APIResponse<AuthResponse>> {
        return {
            status: HttpStatusCode.Ok,
            data: {
                sessionToken: generateRandomString(),
                refreshToken: generateRandomString(),
                expiresIn: 3600,
            }
        }
    }

    async logout(): Promise<APIResponse<undefined>> {
        return {
            status: HttpStatusCode.Ok,
            data: undefined,
        }
    }
    
    async refreshToken(refreshTokenRequest: RefreshTokenRequest): Promise<APIResponse<AuthResponse>> {
        return {
            status: HttpStatusCode.Ok,
            data: {
                sessionToken: generateRandomString(),
                refreshToken: generateRandomString(),
                expiresIn: 3600,
            }
        }
    }

}

const authServiceMock: IAuthService = new AuthServiceMock();
export { authServiceMock };