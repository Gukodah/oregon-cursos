import { DomainError } from "../../shared/errors/domain.error";

export class CourseNotFoundError extends DomainError {
  readonly code = "COURSE_NOT_FOUND";
  readonly httpStatusCode = 404;
  readonly metadata: {
    courseId: string;
  };

  constructor(courseId: string) {
    super(`Curso não encontrado: ${courseId}`);
    this.metadata = { courseId };
  }
}
