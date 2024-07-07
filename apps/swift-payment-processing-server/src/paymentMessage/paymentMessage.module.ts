import { Module } from "@nestjs/common";
import { PaymentMessageModuleBase } from "./base/paymentMessage.module.base";
import { PaymentMessageService } from "./paymentMessage.service";
import { PaymentMessageController } from "./paymentMessage.controller";
import { PaymentMessageResolver } from "./paymentMessage.resolver";

@Module({
  imports: [PaymentMessageModuleBase],
  controllers: [PaymentMessageController],
  providers: [PaymentMessageService, PaymentMessageResolver],
  exports: [PaymentMessageService],
})
export class PaymentMessageModule {}
