import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface GroupMemberAttributes {
  id: number;
  group_id: number;
  user_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface GroupMemberCreationAttributes extends Optional<
  GroupMemberAttributes,
  'id' | 'createdAt' | 'updatedAt'
> {}

class GroupMember
  extends Model<GroupMemberAttributes, GroupMemberCreationAttributes>
  implements GroupMemberAttributes
{
  public id!: number;
  public group_id!: number;
  public user_id!: number;

  public createdAt?: Date;
  public updatedAt?: Date;
}

GroupMember.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'group_members',
    timestamps: true,
    underscored: true,
  },
);

export default GroupMember;
