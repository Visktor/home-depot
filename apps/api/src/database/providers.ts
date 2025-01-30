import { Sequelize } from 'sequelize-typescript';
import { Business } from './entities/Businesses';
import { Cart } from './entities/Carts';
import { Client } from './entities/Clients';
import { Order } from './entities/Orders';
import { Product } from './entities/Products';
import { Profile } from './entities/Profiles';
import { User } from './entities/Users';
import { CartsProducts } from './entities/CartsProducts';
import { EnvService } from 'config/env/env.service';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (envService: EnvService) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        ...envService.getDbConfig(),
      });
      sequelize.addModels([
        Business,
        Cart,
        CartsProducts,
        Client,
        Order,
        Product,
        Profile,
        User,
      ]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [EnvService],
  },
];
