import { EnrollmentStatusTransitionError } from "../../enrollments/errors/invalid-enrollment-status-transition.error";
import { InvalidEnrollmentStatusError } from "../../enrollments/errors/invalid-enrollment-status.error";

export class EnrollmentStatus {
  private static readonly VALID_STATUSES = [
    "pending",
    "confirmed",
    "cancelled",
    "completed",
  ] as const;

  constructor(
    public readonly value: (typeof EnrollmentStatus.VALID_STATUSES)[number],
  ) {
    if (!EnrollmentStatus.VALID_STATUSES.includes(value)) {
      throw new InvalidEnrollmentStatusError(value);
    }
  }

  canTransitionTo(newStatus: EnrollmentStatus): boolean {
    const allowedTransitions: Record<string, string[]> = {
      pending: ["confirmed", "cancelled"],
      confirmed: ["completed", "cancelled"],
      cancelled: [],
      completed: [],
    };

    return allowedTransitions[this.value].includes(newStatus.value);
  }

  equals(other: EnrollmentStatus): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
