import { DisposableEmailError } from "../errors/disposable-email.error";
import { InvalidEmailError } from "../errors/invalid-email.error";

export class Email {
  private static readonly EMAIL_REGEX =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  private constructor(public readonly value: string) {}

  static create(email: string): Email {
    const normalized = email.trim().toLowerCase();

    if (!this.EMAIL_REGEX.test(normalized)) {
      throw new InvalidEmailError(email);
    }

    if (this.isDisposable(normalized)) {
      throw new DisposableEmailError(
        email,
        "disposalbe-email-detector-provider",
      );
    }

    return new Email(normalized);
  }

  private static isDisposable(email: string): boolean {
    const disposableDomains = ["tempmail.com", "10minutemail.com" /* ... */];
    const domain = email.split("@")[1];
    return disposableDomains.includes(domain);
  }

  get localPart(): string {
    return this.value.split("@")[0];
  }

  get domain(): string {
    return this.value.split("@")[1];
  }

  equals(other: Email): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
