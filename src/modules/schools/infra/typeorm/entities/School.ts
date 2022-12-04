import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

}

export default School