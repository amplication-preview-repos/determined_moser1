import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BeneficiaryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="address" multiline source="address" />
        <TextInput label="country" source="country" />
        <TextInput label="beneficiaryAccount" source="beneficiaryAccount" />
      </SimpleForm>
    </Create>
  );
};
