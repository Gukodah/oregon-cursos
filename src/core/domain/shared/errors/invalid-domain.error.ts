import { DomainError } from "./domain.error";

export class DomainValidationError extends DomainError {
  readonly code = "DOMAIN_VALIDATION_FAILED";
  readonly httpStatusCode = 422;
  readonly metadata: {
    entity: string;
    violations: Array<{
      field: string;
      message: string;
    }>;
  };

  constructor(
    entity: string,
    violations: Array<{ field: string; message: string }>,
  ) {
    super(`Falha na validação de ${entity}`);
    this.metadata = { entity, violations };
  }
}
