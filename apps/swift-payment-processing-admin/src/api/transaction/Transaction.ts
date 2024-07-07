import { PaymentMessage } from "../paymentMessage/PaymentMessage";
import { Account } from "../account/Account";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  transactionId: string | null;
  amount: number | null;
  transactionDate: Date | null;
  paymentMessage?: PaymentMessage | null;
  account?: Account | null;
};
