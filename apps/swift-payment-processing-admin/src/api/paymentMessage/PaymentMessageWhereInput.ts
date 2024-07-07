import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type PaymentMessageWhereInput = {
  id?: StringFilter;
  swiftCode?: StringNullableFilter;
  beneficiaryAccount?: StringNullableFilter;
  transactionAmount?: FloatNullableFilter;
  currency?: StringNullableFilter;
  paymentDescription?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
