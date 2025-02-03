import { DomainError } from "../../shared/errors/domain.error";

export class InvalidCEPError extends DomainError {
  readonly code = "INVALID_CEP";
  readonly httpStatusCode = 400;
  readonly metadata: { invalidCEP: string };

  constructor(cep: string) {
    super(`Formato de CEP inválido: ${cep}`);
    this.metadata = { invalidCEP: cep };
  }
}
