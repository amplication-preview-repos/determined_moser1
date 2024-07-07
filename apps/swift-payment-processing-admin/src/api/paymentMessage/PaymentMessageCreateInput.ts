import { TransactionCreateNestedManyWithoutPaymentMessagesInput } from "./TransactionCreateNestedManyWithoutPaymentMessagesInput";

export type PaymentMessageCreateInput = {
  swiftCode?: string | null;
  beneficiaryAccount?: string | null;
  transactionAmount?: number | null;
  currency?: string | null;
  paymentDescription?: string | null;
  transactions?: TransactionCreateNestedManyWithoutPaymentMessagesInput;
};
