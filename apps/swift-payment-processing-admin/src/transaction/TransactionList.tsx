import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PAYMENTMESSAGE_TITLE_FIELD } from "../paymentMessage/PaymentMessageTitle";
import { ACCOUNT_TITLE_FIELD } from "../account/AccountTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
