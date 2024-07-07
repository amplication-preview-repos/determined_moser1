export type Beneficiary = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  country: string | null;
  beneficiaryAccount: string | null;
};
