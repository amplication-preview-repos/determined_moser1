import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  accountNumber?: StringNullableFilter;
  bankName?: StringNullableFilter;
  balance?: FloatNullableFilter;
  currency?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
