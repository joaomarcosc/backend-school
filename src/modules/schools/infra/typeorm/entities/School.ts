import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('school')
class School {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 100 })
  name: string

  @Column({ length: 14 })
  document: string

  @Column()
  address: string

  @Column({ length: 9 })
  zipcode: string

  @Column()
  city: string;

  @Column()
  state: string

  @Column()
  country: string;

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  update_at: string
}

export default School