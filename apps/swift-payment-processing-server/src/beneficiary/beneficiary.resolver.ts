import * as graphql from "@nestjs/graphql";
import { BeneficiaryResolverBase } from "./base/beneficiary.resolver.base";
import { Beneficiary } from "./base/Beneficiary";
import { BeneficiaryService } from "./beneficiary.service";

@graphql.Resolver(() => Beneficiary)
export class BeneficiaryResolver extends BeneficiaryResolverBase {
  constructor(protected readonly service: BeneficiaryService) {
    super(service);
  }
}
