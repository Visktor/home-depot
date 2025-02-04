import { Profile } from '#/database/entities/Profiles';
import {
  User,
  UserAttributes,
  UserCreationAttributes,
} from '#/database/entities/Users';
import { Injectable, NotFoundException } from '@nestjs/common';
import { WhereOptions } from 'sequelize';

@Injectable()
export class UserService {
  getAll() {
    return User.findAll();
  }

  getById(id: string) {
    return User.findByPk(id);
  }

  async findOne(opts: WhereOptions<User>) {
    const user = await User.findOne<User>({
      where: opts,
      include: {
        model: Profile,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user.get({ plain: true }) as UserAttributes;
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
