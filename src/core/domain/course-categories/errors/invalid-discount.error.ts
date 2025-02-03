import { DomainError } from "../../shared/errors/domain.error";

export class InvalidDiscountError extends DomainError {
  readonly code = "INVALID_DISCOUNT";
  readonly httpStatusCode = 400;
  readonly metadata: {
    categoryCode?: string;
    percentage?: number;
    reason: string;
  };

  constructor(reason: string, category?: string, percentage?: number) {
    super(`Desconto inválido: ${reason}`);
    this.metadata = { categoryCode: category, percentage, reason };
  }
}
