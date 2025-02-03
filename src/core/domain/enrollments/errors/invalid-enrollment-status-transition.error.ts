import { DomainError } from "../../shared/errors/domain.error";

export class EnrollmentStatusTransitionError extends DomainError {
  readonly code = "ENROLLMENT_TRANSITION_ERROR";
  readonly httpStatusCode = 409;
  readonly metadata: {
    from: string;
    to: string;
  };

  constructor(from: string, to: string) {
    super(`Transição de status não permitida: ${from} para ${to}`);
    this.metadata = { from, to };
  }
}
