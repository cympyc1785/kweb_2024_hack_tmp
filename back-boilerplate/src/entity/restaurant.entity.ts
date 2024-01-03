import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class Restaurant {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  restaurantName!: string

  @Column()
  location!: string

  @Column()
  category!: string

  @Column({ nullable: true })
  img_dir?: string

  @Column()
  description!: string
}
