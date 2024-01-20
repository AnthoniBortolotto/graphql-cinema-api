import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Section } from './section.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: 'varchar', length: 500, nullable: false })
  title: string;
  @Column({ type: 'varchar', length: 1000, nullable: false })
  description: string;
  @OneToMany(() => Section, (section) => section.id)
  section: Section;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  //todo
  //banner
  // actors: string;
  //  genre: string;
}
