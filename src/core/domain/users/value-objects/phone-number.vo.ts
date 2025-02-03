import { InvalidPhoneNumberError } from "../errors/invalid-phone-number.error";

export class PhoneNumber {
  private static readonly PHONE_REGEX =
    /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;

  private constructor(
    public readonly countryCode: string,
    public readonly nationalNumber: string,
    public readonly formatted: string,
  ) {}

  static create(rawNumber: string): PhoneNumber {
    const cleaned = rawNumber.replace(/[^\d+]/g, "");

    if (!this.PHONE_REGEX.test(cleaned)) {
      throw new InvalidPhoneNumberError(rawNumber);
    }

    const countryCode = this.extractCountryCode(cleaned);
    const nationalNumber = cleaned.slice(countryCode.length);

    return new PhoneNumber(
      countryCode,
      nationalNumber,
      this.formatNumber(countryCode, nationalNumber),
    );
  }

  private static extractCountryCode(phone: string): string {
    // Lógica complexa de extração de código de país
    if (phone.startsWith("+55")) return "+55";
    if (phone.startsWith("+1")) return "+1";
    // ... outros códigos
    return "+55"; // Default para Brasil
  }

  private static formatNumber(cc: string, nn: string): string {
    // Formatação específica por país
    if (cc === "+55") {
      return `+${cc} (${nn.substring(0, 2)}) ${nn.substring(2, 7)}-${nn.substring(7)}`;
    }
    return `${cc} ${nn}`;
  }

  equals(other: PhoneNumber): boolean {
    return (
      this.nationalNumber === other.nationalNumber &&
      this.countryCode === other.countryCode
    );
  }

  toString(): string {
    return this.formatted;
  }

  toPersistence(): string {
    return this.countryCode + this.nationalNumber;
  }
}
