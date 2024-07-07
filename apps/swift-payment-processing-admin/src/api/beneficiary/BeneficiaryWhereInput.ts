import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BeneficiaryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  country?: StringNullableFilter;
  beneficiaryAccount?: StringNullableFilter;
};
