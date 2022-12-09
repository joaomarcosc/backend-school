import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import Grade from "../../../../grade/infra/typeorm/entities/Grade";
import SchoolClass from "../../../../school_class/infra/typeorm/entities/SchoolClass";

@Entity("students")
class Students {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  document: string

  @Column()
  registration_number: number

  @Column()
  module: number

  @Column()
  class_school_id: string

  @ManyToOne(() => SchoolClass)
  @JoinColumn({ name: "class_school_id" })
  school_class: SchoolClass

  @OneToOne(() => Grade, item => item.student, { onDelete: 'CASCADE' })
  @JoinTable()
  grade: Grade

  @Column()
  created_at: string

  @Column()
  updated_at: string
}

export default Students