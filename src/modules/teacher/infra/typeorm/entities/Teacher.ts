import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import SchoolClass from "../../../../school_class/infra/typeorm/entities/SchoolClass";

@Entity("teacher")
export class Teacher {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  document: string

  @Column()
  academic_title: string;

  @Column()
  class_school_id: string

  @OneToOne(() => SchoolClass)
  @JoinColumn({ name: "class_school_id" })
  class_school: SchoolClass

  @Column()
  discipline_teaches: string

  @Column()
  created_at: string

  @Column()
  updated_at: string
}

export default Teacher