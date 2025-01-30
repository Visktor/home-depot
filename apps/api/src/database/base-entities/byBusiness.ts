import {
  Column,
  DataType,
  BelongsTo,
  TableOptions,
} from 'sequelize-typescript';
import { ComplexEntity, ComplexTable } from './complex';
import { Business } from '../entities/Businesses';

const ByBusinessTable = (opts?: TableOptions) =>
  ComplexTable({
    ...opts,
    scopes: {
      byBusiness(businessId: number) {
        return {
          where: {
            businessId,
          },
        };
      },
      withBusiness(businessId: number) {
        return {
          include: [
            {
              model: Business,
              as: 'business',
              where: {
                id: businessId,
              },
            },
          ],
        };
      },
      ...opts?.scopes,
    },
  });

class ByBusinessEntity extends ComplexEntity {
  @Column({ allowNull: false, type: DataType.INTEGER })
  businessId: number;

  @BelongsTo(() => Business, { foreignKey: 'businessId' })
  business: Business;
}

export { ByBusinessEntity, ByBusinessTable };
