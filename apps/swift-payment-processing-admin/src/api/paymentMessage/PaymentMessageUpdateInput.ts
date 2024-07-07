import { TransactionUpdateManyWithoutPaymentMessagesInput } from "./TransactionUpdateManyWithoutPaymentMessagesInput";

export type PaymentMessageUpdateInput = {
  swiftCode?: string | null;
  beneficiaryAccount?: string | null;
  transactionAmount?: number | null;
  currency?: string | null;
  paymentDescription?: string | null;
  transactions?: TransactionUpdateManyWithoutPaymentMessagesInput;
};
