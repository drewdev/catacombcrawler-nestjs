import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  level: number;

  @Column({ default: 100 })
  health: number;

  @Column({ type: 'simple-json' })
  inventory: {
    weapon: {
      attack: number;
      name: string;
    },
    armour: {
      defense: number;
      name: string;
    }
  }
}
