import { SortOrder } from "../../util/SortOrder";

export type PaymentMessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  swiftCode?: SortOrder;
  beneficiaryAccount?: SortOrder;
  transactionAmount?: SortOrder;
  currency?: SortOrder;
  paymentDescription?: SortOrder;
};
