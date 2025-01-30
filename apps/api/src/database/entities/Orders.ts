import { Column, DataType } from 'sequelize-typescript';
import { ByClientEntity, ByClientTable } from '../base-entities/byClient';

@ByClientTable()
class Order extends ByClientEntity {
  @Column({ allowNull: false, type: DataType.STRING })
  code: string;

  @Column({ allowNull: false, type: DataType.STRING })
  address: string;

  @Column({ allowNull: false, type: DataType.DATE })
  expectedTime: Date;
}

export { Order };
