interface AuthResponse {
    sessionToken: string;
    refreshToken: string;
    expiresIn: number;
};

export type { AuthResponse };