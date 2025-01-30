import {
  BelongsTo,
  Column,
  DataType,
  TableOptions,
} from 'sequelize-typescript';
import { User } from '../entities/Users';
import { ComplexEntity, ComplexTable } from './complex';

const byUserTable = (opts?: TableOptions) => {
  ComplexTable({
    ...opts,
    scopes: {
      byUser(userId: number) {
        return {
          where: {
            userId,
          },
        };
      },
      withUser(userId: number) {
        return {
          include: [
            {
              model: User,
              as: 'user',
              where: {
                id: userId,
              },
            },
          ],
        };
      },
      ...opts?.scopes,
    },
  });
};

class ByUserEntity extends ComplexEntity {
  @Column({ allowNull: false, type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User, { foreignKey: 'userId' })
  user: User;
}

export { ByUserEntity, byUserTable };
