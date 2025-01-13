import { Table, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class BaseEntity extends Model {
  @AutoIncrement
  @PrimaryKey
  id: number;
}
