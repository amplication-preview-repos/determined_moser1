import { SortOrder } from "../../util/SortOrder";

export type BeneficiaryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
  country?: SortOrder;
  beneficiaryAccount?: SortOrder;
};
