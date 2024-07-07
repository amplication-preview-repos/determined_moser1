import { PaymentMessage as TPaymentMessage } from "../api/paymentMessage/PaymentMessage";

export const PAYMENTMESSAGE_TITLE_FIELD = "swiftCode";

export const PaymentMessageTitle = (record: TPaymentMessage): string => {
  return record.swiftCode?.toString() || String(record.id);
};
