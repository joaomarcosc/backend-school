import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import SchoolClass from "../../../../school_class/infra/typeorm/entities/SchoolClass";

@Entity("students")
class Students {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column({ type: "float" })
  final_grade: number

  @Column()
  approved: boolean

  @Column()
  class_school_id: string

  @ManyToOne(() => SchoolClass)
  @JoinColumn({ name: "class_school_id" })
  school_class: SchoolClass

  @Column()
  created_at: string

  @Column()
  updated_at: string
}

export default Students