import { AccountType } from "..";

interface SignUpRequest {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    accountType: AccountType;
}

export type { SignUpRequest }