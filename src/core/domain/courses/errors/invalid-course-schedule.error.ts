import { DomainError } from "../../shared/errors/domain.error";

export class InvalidCourseScheduleError extends DomainError {
  readonly code = "INVALID_COURSE_SCHEDULE";
  readonly httpStatusCode = 409;
  readonly metadata: {
    startDate: Date;
    endDate: Date;
  };

  constructor(startDate: Date, endDate: Date) {
    super(`Datas do curso inválidas: ${startDate} → ${endDate}`);
    this.metadata = { startDate, endDate };
  }
}
