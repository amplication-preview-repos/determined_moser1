import * as graphql from "@nestjs/graphql";
import { PaymentMessageResolverBase } from "./base/paymentMessage.resolver.base";
import { PaymentMessage } from "./base/PaymentMessage";
import { PaymentMessageService } from "./paymentMessage.service";

@graphql.Resolver(() => PaymentMessage)
export class PaymentMessageResolver extends PaymentMessageResolverBase {
  constructor(protected readonly service: PaymentMessageService) {
    super(service);
  }
}
