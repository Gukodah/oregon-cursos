export abstract class DomainError extends Error {
  abstract readonly code: string;
  abstract readonly metadata: Record<string, unknown>;
  abstract readonly httpStatusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      metadata: this.metadata,
      stack: this.stack,
    };
  }
}
