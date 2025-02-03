import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CourseTypeormEntity } from "./course.typeorm-entity";

@Entity("course_categories")
export class CourseCategoryTypeormEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  code: string; // Ex: 'dev', 'product-mgmt'

  @Column()
  name: string; // Ex: 'Desenvolvimento'

  @Column({ nullable: true })
  parentCategoryId?: string; // Para hierarquias

  @OneToMany(() => CourseTypeormEntity, (course) => course.category)
  courses: CourseTypeormEntity[];

  @Column({ type: "jsonb", nullable: true })
  metadata?: {
    description?: string;
    colorCode?: string;
    icon?: string;
  };
}
