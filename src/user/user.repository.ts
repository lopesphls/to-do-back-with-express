import { AppDataSource } from '../database/dataSource';
import UserEntity from '../database/entities/users.entity';

class UserRepository {
  private userRepository = AppDataSource.getRepository(UserEntity);

  public async getAllUsersRepository() {
    const users = await this.userRepository.find();
    return users;
  }
}

export default new UserRepository();
