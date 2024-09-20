import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dungeon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('text')
  description: string;

  @Column({ default: false })
  cleared: boolean;

  @Column('simple-array')
  encounters: string[];
}
