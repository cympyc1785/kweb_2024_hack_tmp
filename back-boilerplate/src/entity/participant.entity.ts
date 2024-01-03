import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './user.entity'
import Poll from './poll.entity'

@Entity()
export default class Participant {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  userId!: User;

  @Column()
  displayName!: string

  @ManyToOne(() => Poll, (poll) => poll.id)
  @JoinColumn()
  pollId!: Poll
}
