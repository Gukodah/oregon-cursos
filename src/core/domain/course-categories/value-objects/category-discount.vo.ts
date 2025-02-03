import { InvalidDiscountError } from "../errors/invalid-discount.error";

export class CategoryDiscount {
  constructor(
    public readonly categoryCode: string, // Código da categoria (ex: 'dev')
    public readonly percentage: number, // 20% de desconto
    public readonly validUntil: Date, // Validade da promoção
  ) {
    this.validate();
  }

  private validate(): void {
    if (this.percentage < 1 || this.percentage > 100) {
      throw new InvalidDiscountError("Percentual deve ser entre 1 e 100");
    }

    if (this.validUntil < new Date()) {
      throw new InvalidDiscountError("Data de validade expirada");
    }
  }

  isApplicable(
    targetCategory: string,
    currentDate: Date = new Date(),
  ): boolean {
    return (
      this.categoryCode === targetCategory && this.validUntil >= currentDate
    );
  }

  applyDiscount(originalPrice: number): number {
    return originalPrice * (1 - this.percentage / 100);
  }
}
