import { PaymentMessageWhereUniqueInput } from "../paymentMessage/PaymentMessageWhereUniqueInput";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type TransactionUpdateInput = {
  transactionId?: string | null;
  amount?: number | null;
  transactionDate?: Date | null;
  paymentMessage?: PaymentMessageWhereUniqueInput | null;
  account?: AccountWhereUniqueInput | null;
};
