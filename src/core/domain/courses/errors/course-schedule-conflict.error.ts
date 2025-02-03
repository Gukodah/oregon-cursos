import { DomainError } from "../../shared/errors/domain.error";

export class CourseScheduleConflictError extends DomainError {
  readonly code = "COURSE_SCHEDULE_CONFLICT";
  readonly httpStatusCode = 409;
  readonly metadata: {
    conflictingCourses: Array<{
      courseCode: string;
      schedule: string;
    }>;
  };

  constructor(
    conflictingCourses: Array<{ courseCode: string; schedule: string }>,
  ) {
    super("Conflito de horário com outros cursos");
    this.metadata = { conflictingCourses };
  }
}
