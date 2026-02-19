import sequelize from '../config/db';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TeamspaceMemberAttributes {
  id: number;
  teamspace_id: number;
  user_id: number;
  role: 'admin' | 'editor' | 'viewer';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TeamspaceMemberCreationAttributes extends Optional<
  TeamspaceMemberAttributes,
  'id' | 'createdAt' | 'updatedAt'
> {}

class TeamspaceMember
  extends Model<TeamspaceMemberAttributes, TeamspaceMemberCreationAttributes>
  implements TeamspaceMemberAttributes
{
  public id!: number;
  public teamspace_id!: number;
  public user_id!: number;
  public role!: 'admin' | 'editor' | 'viewer';
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

TeamspaceMember.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    teamspace_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'editor', 'viewer'),
      allowNull: false,
      defaultValue: 'viewer',
    },
  },
  {
    sequelize,
    tableName: 'teamspace_members',
    timestamps: true,
    underscored: true,
  },
);

export default TeamspaceMember;
