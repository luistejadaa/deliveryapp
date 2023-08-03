import { AccountType } from "./types/account-type";

interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    accountType: AccountType;
}

export type { UserProfile };