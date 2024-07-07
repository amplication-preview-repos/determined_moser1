import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentMessageService } from "./paymentMessage.service";
import { PaymentMessageControllerBase } from "./base/paymentMessage.controller.base";

@swagger.ApiTags("paymentMessages")
@common.Controller("paymentMessages")
export class PaymentMessageController extends PaymentMessageControllerBase {
  constructor(protected readonly service: PaymentMessageService) {
    super(service);
  }
}
