import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  transactionId?: SortOrder;
  amount?: SortOrder;
  transactionDate?: SortOrder;
  paymentMessageId?: SortOrder;
  accountId?: SortOrder;
};
