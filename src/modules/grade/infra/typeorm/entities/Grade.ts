import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import SchoolClass from "../../../../school_class/infra/typeorm/entities/SchoolClass";
import Students from "../../../../students/infra/typeorm/entities/Students";

@Entity("grade")
class Grade {
  @PrimaryColumn()
  id: string

  @Column()
  student_id: string

  @Column()
  classroom_id: string

  @Column()
  final_grade: number

  @Column()
  approved: boolean

  @ManyToOne(() => SchoolClass)
  @JoinColumn({ name: "classroom_id" })
  classroom: SchoolClass

  @OneToOne(() => Students)
  @JoinColumn({ name: "student_id" })
  student: Students

  @Column()
  created_at: string

  @Column()
  updated_at: string
}

export default Grade