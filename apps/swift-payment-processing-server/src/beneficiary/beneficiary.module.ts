import { Module } from "@nestjs/common";
import { BeneficiaryModuleBase } from "./base/beneficiary.module.base";
import { BeneficiaryService } from "./beneficiary.service";
import { BeneficiaryController } from "./beneficiary.controller";
import { BeneficiaryResolver } from "./beneficiary.resolver";

@Module({
  imports: [BeneficiaryModuleBase],
  controllers: [BeneficiaryController],
  providers: [BeneficiaryService, BeneficiaryResolver],
  exports: [BeneficiaryService],
})
export class BeneficiaryModule {}
