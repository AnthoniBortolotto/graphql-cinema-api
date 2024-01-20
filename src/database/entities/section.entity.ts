import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Seat } from './seat.entity';
import { Ticket } from './ticket.entity';
import { Movie } from './movie.entity';

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ name: 'max_capacity', type: 'numeric', nullable: false })
  maxCapacity: number;
  @Column({ name: 'room_name', type: 'varchar', length: '50', nullable: false })
  roomName: string;
  @OneToMany(() => Seat, (seat) => seat.id)
  seats: Seat[];
  @OneToMany(() => Ticket, (ticket) => ticket.id)
  tickets: Ticket[];
  @Column({ name: 'section_start', type: 'timestamp', nullable: false })
  sectionStart: Date;
  @Column({ name: 'section_end', type: 'timestamp', nullable: false })
  sectionEnd: Date;
  @Column({ name: 'is_3d', type: 'boolean', nullable: false, default: false })
  is3D: boolean;
  @ManyToOne(() => Movie, (movie) => movie.id)
  movie: Movie;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
