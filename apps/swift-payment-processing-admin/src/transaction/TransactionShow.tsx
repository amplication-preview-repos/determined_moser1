import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PAYMENTMESSAGE_TITLE_FIELD } from "../paymentMessage/PaymentMessageTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="transactionId" source="transactionId" />
        <TextField label="amount" source="amount" />
        <TextField label="transactionDate" source="transactionDate" />
        <ReferenceField
          label="paymentMessage"
          source="paymentmessage.id"
          reference="PaymentMessage"
        >
          <TextField source={PAYMENTMESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="account" source="account.id" reference="Account">
          <TextField source={ACCOUNT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
