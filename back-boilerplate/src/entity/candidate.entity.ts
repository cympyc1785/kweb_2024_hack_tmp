import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from './user.entity'

@Entity()
export default class Candidate {
  @PrimaryGeneratedColumn()
  id!: number;
}
