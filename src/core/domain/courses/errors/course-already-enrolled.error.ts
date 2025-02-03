import { DomainError } from "../../shared/errors/domain.error";

export class CourseAlreadyEnrolledError extends DomainError {
  readonly code = "COURSE_ALREADY_ENROLLED";
  readonly httpStatusCode = 409;
  readonly metadata: {
    userId: string;
    courseCode: string;
  };

  constructor(userId: string, courseCode: string) {
    super(`Usuário ${userId} já matriculado no curso ${courseCode}`);
    this.metadata = { userId, courseCode };
  }
}
