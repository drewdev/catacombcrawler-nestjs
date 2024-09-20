import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Encounter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  type: string;

  @Column('text')
  description: string;

  @Column()
  difficulty: number;
}
