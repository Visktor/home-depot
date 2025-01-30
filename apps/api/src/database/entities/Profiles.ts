import { Column, DataType } from 'sequelize-typescript';
import { InferAttributes, Optional } from 'sequelize';
import { ByBusinessEntity, ByBusinessTable } from '../base-entities/byBusiness';

@ByBusinessTable()
class Profile extends ByBusinessEntity {
  @Column({ allowNull: false, type: DataType.STRING, unique: true })
  name: string;

  @Column({ allowNull: false, type: DataType.ARRAY(DataType.STRING) })
  special_access: string[];
}

type ProfileAttributes = InferAttributes<Profile>;
type ProfileCreationAttributes = Optional<ProfileAttributes, 'id'>;

export { Profile, type ProfileAttributes, type ProfileCreationAttributes };
