import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  TableOptions,
} from 'sequelize-typescript';

const BaseTable = (opts?: TableOptions) =>
  Table({ underscored: true, ...opts });

class BaseEntity extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;
}

export { BaseEntity, BaseTable };
