import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentMessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PaymentMessages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="swiftCode" source="swiftCode" />
        <TextField label="beneficiaryAccount" source="beneficiaryAccount" />
        <TextField label="transactionAmount" source="transactionAmount" />
        <TextField label="currency" source="currency" />
        <TextField label="paymentDescription" source="paymentDescription" />
      </Datagrid>
    </List>
  );
};
