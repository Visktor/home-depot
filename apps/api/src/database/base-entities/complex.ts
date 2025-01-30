import { TableOptions, Column, DataType } from 'sequelize-typescript';
import { BaseTable, BaseEntity } from './base';

const ComplexTable = (opts?: TableOptions) =>
  BaseTable({
    paranoid: true,
    ...opts,
  });

class ComplexEntity extends BaseEntity {
  @Column({ allowNull: false, type: DataType.INTEGER })
  createdBy: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  updatedBy: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  deletedBy: number;
}

export { ComplexEntity, ComplexTable };
