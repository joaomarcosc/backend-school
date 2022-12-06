import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import School from "../../../../schools/infra/typeorm/entities/School";
import Teacher from "../../../../teacher/infra/typeorm/entities/Teacher";

@Entity("school_class")
export class SchoolClass {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  school_id: string

  @ManyToOne(() => School)
  @JoinColumn({ name: "school_id" })
  school: School

  @OneToOne(() => Teacher, (item) => item.class_school)
  @JoinTable()
  teacher: Teacher

  @Column()
  created_at: string

  @Column()
  updated_at: string
}

export default SchoolClass