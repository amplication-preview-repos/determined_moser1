import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "bankName";

export const AccountTitle = (record: TAccount): string => {
  return record.bankName?.toString() || String(record.id);
};
