import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Poll from './poll.entity';
import Restaurant from './restaurant.entity';

@Entity()
export default class Candidate {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Poll, (poll) => poll.id)
  @JoinColumn()
  pollId!: Poll;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.id)
  @JoinColumn()
  restaurantId!: Restaurant;
}
