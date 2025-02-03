import { Session } from "inspector";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CourseCategoryTypeormEntity } from "./course-category.typeorm-entity";
import { CategoryDiscount } from "src/core/domain/course-categories/value-objects/category-discount.vo";

@Entity("courses")
export class CourseTypeormEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  code: string; // Ex: dev-fullstack

  @Column()
  title: string;

  @ManyToOne(() => CourseCategoryTypeormEntity, { eager: true })
  @JoinColumn({ name: "category_id" })
  category: CourseCategoryTypeormEntity;

  @Column()
  durationHours: number;

  @Column({ type: "jsonb" })
  schedule: {
    startDate: Date;
    endDate: Date;
    sessions: Session[];
  };

  @Column({ type: "jsonb" })
  pricing: {
    basePrice: number;
    installmentOptions: number[];
    discounts?: CategoryDiscount[]; // Descontos por categoria
  };

  // Outros campos...
}
