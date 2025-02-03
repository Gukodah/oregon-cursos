import { PhoneNumber } from "../value-objects/phone-number.vo";

export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly phone: PhoneNumber,
    public readonly courses: Course[] = [],
  ) {}

  enrollInCourse(course: Course): void {
    if (this.courses.some((c) => c.id === course.id)) {
      throw new Error("User already enrolled");
    }
    this.courses.push(course);
  }
}
