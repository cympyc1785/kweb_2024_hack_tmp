import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Participant from './participant.entity';
import Candidate from './candidate.entity';

@Entity()
export default class Vote {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Participant, (participant) => participant.id)
  @JoinColumn()
  votedBy!: Participant;

  @ManyToOne(() => Candidate, (candidate) => candidate.id)
  @JoinColumn()
  candidateId!: Candidate;
}
