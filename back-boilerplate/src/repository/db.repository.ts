import AppDataSource from '../config/dataSource';
import User from '../entity/user.entity';
import Poll from '../entity/poll.entity';

const UserRepository = AppDataSource.getRepository(User).extend({});
const PollRepository = AppDataSource.getRepository(Poll).extend({});


export {
  UserRepository,
  PollRepository
};
