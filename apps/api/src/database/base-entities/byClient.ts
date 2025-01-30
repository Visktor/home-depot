import {
  BelongsTo,
  Column,
  DataType,
  TableOptions,
} from 'sequelize-typescript';
import { ComplexEntity, ComplexTable } from './complex';
import { Client } from '../entities/Clients';

const ByClientTable = (opts?: TableOptions) => {
  return ComplexTable({
    ...opts,
    scopes: {
      byClient(clientId: number) {
        return {
          where: {
            clientId,
          },
        };
      },
      withClient(clientId: number) {
        return {
          include: [
            {
              model: Client,
              as: 'client',
              where: {
                id: clientId,
              },
            },
          ],
        };
      },
      ...opts?.scopes,
    },
  });
};

class ByClientEntity extends ComplexEntity {
  @Column({ allowNull: false, type: DataType.INTEGER })
  clientId: number;

  @BelongsTo(() => Client, { foreignKey: 'clientId' })
  client: Client;
}

export { ByClientEntity, ByClientTable };
