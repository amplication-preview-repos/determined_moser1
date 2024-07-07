import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PaymentMessageTitle } from "../paymentMessage/PaymentMessageTitle";
import { AccountTitle } from "../account/AccountTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="transactionId" source="transactionId" />
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <ReferenceInput
          source="paymentMessage.id"
          reference="PaymentMessage"
          label="paymentMessage"
        >
          <SelectInput optionText={PaymentMessageTitle} />
        </ReferenceInput>
        <ReferenceInput source="account.id" reference="Account" label="account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
