import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  accountNumber?: SortOrder;
  bankName?: SortOrder;
  balance?: SortOrder;
  currency?: SortOrder;
};
