import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PaymentMessageWhereUniqueInput } from "../paymentMessage/PaymentMessageWhereUniqueInput";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  transactionId?: StringNullableFilter;
  amount?: FloatNullableFilter;
  transactionDate?: DateTimeNullableFilter;
  paymentMessage?: PaymentMessageWhereUniqueInput;
  account?: AccountWhereUniqueInput;
};
