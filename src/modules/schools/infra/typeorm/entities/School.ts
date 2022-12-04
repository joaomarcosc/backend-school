import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import SchoolClass from "../../../../school_class/infra/typeorm/entities/SchoolClass";

@Entity('school')
export class School {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  document: string

  @Column()
  address: string

  @Column()
  zipcode: string

  @Column()
  city: string;

  @Column()
  state: string

  @Column()
  country: string;

  @Column()
  brand: string;

  @OneToMany(() => SchoolClass, (item) => item.id)
  school_class: SchoolClass

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

}

export default School