import { BelongsTo, Column, DataType } from 'sequelize-typescript';
import { InferAttributes, Optional } from 'sequelize';
import { ByBusinessTable, ByBusinessEntity } from '../base-entities/byBusiness';
import { Profile } from './Profiles';

@ByBusinessTable({
  defaultScope: {
    attributes: {
      exclude: ['password', 'isOwner'],
    },
  },
})
class User extends ByBusinessEntity {
  @Column({ allowNull: false, type: DataType.STRING })
  name: string;

  @Column({ allowNull: false, type: DataType.STRING })
  email: string;

  @Column({ allowNull: false, type: DataType.BOOLEAN })
  isOwner: boolean;

  @Column({ allowNull: false, type: DataType.STRING })
  password: string;

  @Column({ allowNull: false, type: DataType.INTEGER })
  profileId: number;

  @BelongsTo(() => Profile, { foreignKey: 'profileId' })
  profile: Profile;
}

type UserAttributes = InferAttributes<User>;
type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export { User, type UserAttributes, type UserCreationAttributes };
