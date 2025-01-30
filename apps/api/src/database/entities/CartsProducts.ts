import { Column, DataType, BelongsTo } from 'sequelize-typescript';
import { InferAttributes, Optional } from 'sequelize';
import { Cart } from './Carts';
import { Product } from './Products';
import { BaseEntity, BaseTable } from '../base-entities/base';

@BaseTable()
class CartProduct extends BaseEntity {
  @Column({ type: DataType.INTEGER })
  cartId: number;

  @Column({ type: DataType.INTEGER })
  productId: number;

  @BelongsTo(() => Cart, { foreignKey: 'cartId' })
  carts: Cart;

  @BelongsTo(() => Product, { foreignKey: 'cartId' })
  product: Product;
}

type CartsProductsAttributes = InferAttributes<CartProduct>;
type CartsProductsCreationAttributes = Optional<CartsProductsAttributes, 'id'>;

export {
  CartProduct as CartsProducts,
  type CartsProductsAttributes,
  type CartsProductsCreationAttributes,
};
