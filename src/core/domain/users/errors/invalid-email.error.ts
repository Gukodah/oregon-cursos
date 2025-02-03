import { DomainError } from "../../shared/errors/domain.error";

export class InvalidEmailError extends DomainError {
  readonly code = "INVALID_EMAIL";
  readonly httpStatusCode = 400;
  readonly metadata: { invalidValue: string };

  constructor(invalidValue: string) {
    super(`Formato de e-mail inválido: ${invalidValue}`);
    this.metadata = { invalidValue };
  }
}
