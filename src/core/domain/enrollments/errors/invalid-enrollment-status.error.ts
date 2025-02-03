import { DomainError } from "../../shared/errors/domain.error";

export class InvalidEnrollmentStatusError extends DomainError {
  readonly code = "INVALID_ENROLLMENT_STATUS";
  readonly httpStatusCode = 409;
  readonly metadata: {
    attemptedStatus: string;
  };

  constructor(attempted: string) {
    super(`Status inválido: ${attempted}`);
    this.metadata = { attemptedStatus: attempted };
  }
}
