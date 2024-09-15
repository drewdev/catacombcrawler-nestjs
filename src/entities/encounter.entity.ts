import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Encounter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  type: string;  // Puede ser "Enemy", "Treasure", etc.

  @Column('text')
  description: string;

  @Column()
  difficulty: number;  // La dificultad de este encuentro
}
