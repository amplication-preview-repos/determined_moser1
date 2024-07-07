import { PaymentMessageWhereInput } from "./PaymentMessageWhereInput";
import { PaymentMessageOrderByInput } from "./PaymentMessageOrderByInput";

export type PaymentMessageFindManyArgs = {
  where?: PaymentMessageWhereInput;
  orderBy?: Array<PaymentMessageOrderByInput>;
  skip?: number;
  take?: number;
};
