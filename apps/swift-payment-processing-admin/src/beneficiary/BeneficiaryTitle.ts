import { Beneficiary as TBeneficiary } from "../api/beneficiary/Beneficiary";

export const BENEFICIARY_TITLE_FIELD = "name";

export const BeneficiaryTitle = (record: TBeneficiary): string => {
  return record.name?.toString() || String(record.id);
};
