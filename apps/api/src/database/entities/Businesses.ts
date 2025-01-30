import { Column, DataType } from 'sequelize-typescript';
import { InferAttributes, Optional } from 'sequelize';
import { ComplexEntity, ComplexTable } from '../base-entities/complex';

@ComplexTable()
class Business extends ComplexEntity {
  @Column({ allowNull: false, type: DataType.STRING(255) })
  name: string;

  @Column({ allowNull: false, type: DataType.STRING(255) })
  TradeName: string;

  @Column({ allowNull: false, type: DataType.STRING(14) })
  cnpj: string;
}

type BusinessAttributes = InferAttributes<Business>;
type BusinessCreationAttributes = Optional<BusinessAttributes, 'id'>;

export { Business, type BusinessAttributes, type BusinessCreationAttributes };
