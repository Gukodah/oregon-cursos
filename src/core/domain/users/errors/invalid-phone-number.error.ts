import { DomainError } from "../../shared/errors/domain.error";

export class InvalidPhoneNumberError extends DomainError {
  readonly code = "INVALID_PHONE_NUMBER";
  readonly httpStatusCode = 400;
  readonly metadata: { invalidValue: string };

  constructor(invalidValue: string) {
    super(`Número de telefone inválido: ${invalidValue}`);
    this.metadata = { invalidValue };
  }
}
