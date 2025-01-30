import { Column, DataType, BelongsTo, HasMany } from 'sequelize-typescript';
import { InferAttributes, Optional } from 'sequelize';
import { User } from './Users';
import { Product } from './Products';
import { ComplexEntity, ComplexTable } from '../base-entities/complex';

@ComplexTable()
class Cart extends ComplexEntity {
  @Column({ allowNull: false, type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User, { foreignKey: 'userId' })
  user: User;

  @HasMany(() => Product, { foreignKey: 'cardId' })
  products: Product[];
}

type CartAttributes = InferAttributes<Cart>;
type CartCreationAttributes = Optional<CartAttributes, 'id'>;

export { Cart, type CartAttributes, type CartCreationAttributes };
