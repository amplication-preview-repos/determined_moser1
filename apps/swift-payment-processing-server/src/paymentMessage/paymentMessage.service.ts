import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentMessageServiceBase } from "./base/paymentMessage.service.base";

@Injectable()
export class PaymentMessageService extends PaymentMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
