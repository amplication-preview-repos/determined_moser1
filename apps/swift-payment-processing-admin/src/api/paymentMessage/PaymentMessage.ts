import { Transaction } from "../transaction/Transaction";

export type PaymentMessage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  swiftCode: string | null;
  beneficiaryAccount: string | null;
  transactionAmount: number | null;
  currency: string | null;
  paymentDescription: string | null;
  transactions?: Array<Transaction>;
};
