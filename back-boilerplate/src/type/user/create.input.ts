import User from '../../entity/user.entity';

export interface CreateUserInput {
  userName: string;
  displayName: string;
  password: string;
  birthDate?: Date;
}

export interface CreatePollInput {
  pollName: string;
  createdBy: User;
  url?: string;
  createdAt: Date;
  endedAt?: Date;
}
