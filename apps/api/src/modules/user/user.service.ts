import {
  User,
  UserAttributes,
  UserCreationAttributes,
} from '#/database/entities/Users';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAll() {
    return User.findAll();
  }

  getById(id: string) {
    return User.findByPk(id);
  }

  findOne(opts: Partial<UserAttributes>) {
    return User.findOne<User>({
      where: opts,
    });
  }

  create(attributes: UserCreationAttributes) {
    return User.create(attributes);
  }

  update(id: string) {
    return User.update(
      {
        id,
      },
      {
        where: {
          id,
        },
      },
    );
  }

  delete(id: string) {
    return User.destroy({
      where: {
        id,
      },
    });
  }
}
