import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Ticket } from './ticket.entity';

@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ name: 'seat_number', type: 'numeric', nullable: false })
  seatNumber: number; // column that indicates the seat number
  @Column({
    name: 'is_available',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  isAvailable: boolean; // column that indicates if the seat is available or not

  @OneToOne(() => Ticket, (ticket) => ticket.id)
  ticket: Ticket;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
