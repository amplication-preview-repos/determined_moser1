import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  accountNumber?: string | null;
  bankName?: string | null;
  balance?: number | null;
  currency?: string | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};
