import { Transaction } from "../transaction/Transaction";

export type Account = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  accountNumber: string | null;
  bankName: string | null;
  balance: number | null;
  currency: string | null;
  transactions?: Array<Transaction>;
};
