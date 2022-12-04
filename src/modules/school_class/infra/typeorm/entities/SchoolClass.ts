import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import School from "../../../../schools/infra/typeorm/entities/School";

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

  @Column()
  created_at: string

  @Column()
  updated_at: string
}

export default SchoolClass