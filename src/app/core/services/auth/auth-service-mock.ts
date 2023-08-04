import { HttpStatusCode } from "axios";
import { AuthResponse, RefreshTokenRequest, UserProfile } from "../../models";
import { APIResponse } from "../../network";
import { IAuthService } from "./interface";
import { generateRandomString } from "../../utils";

class AuthServiceMock implements IAuthService {
    
    login = async (email: string, password: string): Promise<APIResponse<AuthResponse>> => {
        return {
            status: HttpStatusCode.Ok,
            data: {
                sessionToken: generateRandomString(),
                refreshToken: generateRandomString(),
                expiresIn: 3600,
            }
        }
    }

    signup = async (fullName: string, email: string, phone: string, password: string): Promise<APIResponse<AuthResponse>> => {
        return {
            status: HttpStatusCode.Ok,
            data: {
                sessionToken: generateRandomString(),
                refreshToken: generateRandomString(),
                expiresIn: 3600,
            }
        }
    }

    logout = async (): Promise<APIResponse<any>> => {
        return {
            status: HttpStatusCode.Ok,
            data: undefined,
        }
    }
    
    refreshToken = async (refreshTokenRequest: RefreshTokenRequest): Promise<APIResponse<AuthResponse>> => {
        return {
            status: HttpStatusCode.Ok,
            data: {
                sessionToken: generateRandomString(),
                refreshToken: generateRandomString(),
                expiresIn: 3600,
            }
        }
    }

    getUserProfile = async (): Promise<APIResponse<UserProfile>> => {
        return {
            status: HttpStatusCode.Ok,
            data: {
                id: 'id',
                firstName: 'fullName',
                lastName: 'phone',
                email: 'email',
                accountType: 'normalUser'
            },
        }
    }

}

const authServiceMock: IAuthService = new AuthServiceMock();
export { authServiceMock };