import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Section } from './section.entity';
import { Seat } from './seat.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: string;
  @Generated('uuid')
  @Column({
    name: 'ticket_number',
    type: 'varchar',
    nullable: false,
  })
  ticketNumber: string;
  @ManyToOne(() => Section, (section) => section.id)
  section: Section;
  @Column({ name: 'price', type: 'numeric', nullable: false })
  price: number;
  @OneToOne(() => Seat, (seat) => seat.id)
  seat: Seat;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
