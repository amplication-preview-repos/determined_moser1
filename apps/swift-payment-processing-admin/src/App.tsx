import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { PaymentMessageList } from "./paymentMessage/PaymentMessageList";
import { PaymentMessageCreate } from "./paymentMessage/PaymentMessageCreate";
import { PaymentMessageEdit } from "./paymentMessage/PaymentMessageEdit";
import { PaymentMessageShow } from "./paymentMessage/PaymentMessageShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { BeneficiaryList } from "./beneficiary/BeneficiaryList";
import { BeneficiaryCreate } from "./beneficiary/BeneficiaryCreate";
import { BeneficiaryEdit } from "./beneficiary/BeneficiaryEdit";
import { BeneficiaryShow } from "./beneficiary/BeneficiaryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SWIFT Payment Processing"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="PaymentMessage"
          list={PaymentMessageList}
          edit={PaymentMessageEdit}
          create={PaymentMessageCreate}
          show={PaymentMessageShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Beneficiary"
          list={BeneficiaryList}
          edit={BeneficiaryEdit}
          create={BeneficiaryCreate}
          show={BeneficiaryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
