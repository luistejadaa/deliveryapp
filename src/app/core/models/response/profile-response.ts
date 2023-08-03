import { AccountType } from '..'

interface ProfileResponse {
    fullName: string;
    email: string;
    phone: string;
    accountType: AccountType;
}

export type { ProfileResponse };