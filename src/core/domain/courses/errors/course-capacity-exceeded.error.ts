import { DomainError } from "../../shared/errors/domain.error";

export class CourseCapacityExceededError extends DomainError {
  readonly code = "COURSE_CAPACITY_EXCEEDED";
  readonly httpStatusCode = 403;
  readonly metadata: {
    courseCode: string;
    currentEnrollments: number;
    maxCapacity: number;
  };

  constructor(courseCode: string, current: number, max: number) {
    super(`Capacidade do curso ${courseCode} excedida`);
    this.metadata = {
      courseCode,
      currentEnrollments: current,
      maxCapacity: max,
    };
  }
}
