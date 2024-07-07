import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  accountNumber?: string | null;
  bankName?: string | null;
  balance?: number | null;
  currency?: string | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};
