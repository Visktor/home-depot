import { Column, DataType } from 'sequelize-typescript';
import { InferAttributes, Optional } from 'sequelize';
import { ByBusinessTable, ByBusinessEntity } from '../base-entities/byBusiness';

@ByBusinessTable()
class Product extends ByBusinessEntity {
  @Column({ allowNull: false, type: DataType.INTEGER })
  cartId: number;

  @Column({ allowNull: false, type: DataType.STRING })
  name: string;
}

type ProductAttributes = InferAttributes<Product>;
type ProductCreationAttributes = Optional<ProductAttributes, 'id'>;

export { Product, type ProductAttributes, type ProductCreationAttributes };
