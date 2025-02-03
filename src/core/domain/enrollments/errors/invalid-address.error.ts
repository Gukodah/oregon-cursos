import { DomainError } from "../../shared/errors/domain.error";

export class InvalidAddressError extends DomainError {
  readonly code = "ADDRESS_VALIDATION_FAILED";
  readonly httpStatusCode = 422;
  readonly metadata: {
    originalAddress: Record<string, any>;
    validationErrors: string[];
  };

  constructor(address: object, errors: string[]) {
    super("Endereço contém dados inválidos");
    this.metadata = {
      originalAddress: address,
      validationErrors: errors,
    };
  }
}
