import { DomainError } from "../../shared/errors/domain.error";

export class DisposableEmailError extends DomainError {
  readonly code = "DISPOSABLE_EMAIL";
  readonly httpStatusCode = 403;
  readonly metadata: {
    email: string;
    detectedProvider: string;
  };

  constructor(email: string, provider: string) {
    super(`E-mail descartável não permitido: ${provider}`);
    this.metadata = { email, detectedProvider: provider };
  }
}
