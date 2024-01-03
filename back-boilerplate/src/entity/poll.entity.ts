import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from './user.entity'

@Entity()
export default class Poll {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    default: 'poll',
    comment: '투표 이름'
  })
  pollName!: string;

  @OneToOne(() => User)
  @JoinColumn()
  createdBy!: User;

  @Column({ nullable: true })
  url?: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  endedAt?: Date;
}
