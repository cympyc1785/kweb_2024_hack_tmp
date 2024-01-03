import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

// 예시 entity입니다. 필요에 따라 수정하거나 삭제하셔도 됩니다.

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    default: 'user',
    comment: 'username',
  })
  userName!: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    default: 'nickname',
    comment: 'nickname',
  })
  displayName!: string;

  @Column({ type: 'timestamp', nullable: true })
  birthDate?: number;
}
