import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import School from "../../../../schools/infra/typeorm/entities/School";
import Students from "../../../../students/infra/typeorm/entities/Students";
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

  @OneToMany(() => Students, (item) => item.school_class)
  @JoinTable()
  students: Students[]

  @Column()
  created_at: string

  @Column()
  updated_at: string
}

export default SchoolClass