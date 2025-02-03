import { DomainError } from "../../shared/errors/domain.error";

export class DiscountExpiredError extends DomainError {
  readonly code = "DISCOUNT_EXPIRED";
  readonly httpStatusCode = 410;
  readonly metadata: {
    categoryCode: string;
    validUntil: Date;
  };

  constructor(categoryCode: string, validUntil: Date) {
    super(`Desconto para ${categoryCode} expirou em ${validUntil}`);
    this.metadata = { categoryCode, validUntil };
  }
}
