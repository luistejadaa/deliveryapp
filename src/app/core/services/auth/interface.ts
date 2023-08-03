/**
 * This interface defines the methods that should be implemented by an authentication service.
 */
import { AuthResponse, RefreshTokenRequest, UserProfile } from "../../models";
import { APIResponse } from "../../network/api-manager";

interface IAuthService {
    /**
     * Logs in the user with the given email and password.
     * @param email The user's email.
     * @param password The user's password.
     * @returns A promise that resolves to an APIResponse containing an AuthResponse object.
     */
    login: (email: string, password: string) => Promise<APIResponse<AuthResponse>>;

    /**
     * Signs up the user with the given full name, email, phone number, and password.
     * @param fullName The user's full name.
     * @param email The user's email.
     * @param phone The user's phone number.
     * @param password The user's password.
     * @returns A promise that resolves to an APIResponse containing an AuthResponse object.
     */
    signup: (fullName: string, email: string, phone: string, password: string) => Promise<APIResponse<AuthResponse>>;

    /**
     * Logs out the user.
     * @returns A promise that resolves to an APIResponse containing undefined.
     */
    logout: () => Promise<APIResponse<undefined>>;

    /**
     * Refreshes the user's access token with the given refresh token.
     * @param refreshTokenRequest The refresh token request object.
     * @returns A promise that resolves to an APIResponse containing an AuthResponse object.
     */
    refreshToken: (refreshTokenRequest: RefreshTokenRequest) => Promise<APIResponse<AuthResponse>>;

    /**
     * Gets the user's profile information.
     * @returns A promise that resolves to an APIResponse containing a UserProfile object.
     */
    getUserProfile: () => Promise<APIResponse<UserProfile>>;
}

export type { IAuthService };