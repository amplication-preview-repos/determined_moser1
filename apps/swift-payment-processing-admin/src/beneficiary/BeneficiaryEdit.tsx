import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BeneficiaryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="address" multiline source="address" />
        <TextInput label="country" source="country" />
        <TextInput label="beneficiaryAccount" source="beneficiaryAccount" />
      </SimpleForm>
    </Edit>
  );
};
