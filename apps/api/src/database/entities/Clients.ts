import { BelongsTo, Column, DataType } from 'sequelize-typescript';
import { InferAttributes, Optional } from 'sequelize';
import { Profile } from './Profiles';
import { ComplexEntity, ComplexTable } from '../base-entities/complex';

@ComplexTable()
class Client extends ComplexEntity {
  @Column({ allowNull: false, type: DataType.STRING })
  name: string;

  @Column({ allowNull: false, type: DataType.STRING })
  email: string;

  @Column({ allowNull: false, type: DataType.STRING })
  phone: string;

  @Column({ allowNull: false, type: DataType.INTEGER })
  profileId: number;

  @BelongsTo(() => Profile, { foreignKey: 'profileId' })
  profile: Profile;
}

type ClientAttributes = InferAttributes<Client>;
type ClientCreationAttributes = Optional<ClientAttributes, 'id'>;

export { Client, type ClientAttributes, type ClientCreationAttributes };
