import { Account } from "./Account";

export interface Transaction{
    accountID: number,
    account: Account,
    amount: number,
    description: string,
    transactionDate: Date;
}