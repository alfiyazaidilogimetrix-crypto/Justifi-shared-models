import sequelize from '../config/db';
import { DataTypes, Model, Optional } from 'sequelize';

export interface WorkspaceMemberAttributes {
  id: number;
  workspace_id: number;
  user_id: number;
  role: 'admin' | 'editor' | 'viewer';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface WorkspaceMemberCreationAttributes extends Optional<
  WorkspaceMemberAttributes,
  'id' | 'createdAt' | 'updatedAt'
> {}

class WorkspaceMember
  extends Model<WorkspaceMemberAttributes, WorkspaceMemberCreationAttributes>
  implements WorkspaceMemberAttributes
{
  public id!: number;
  public workspace_id!: number;
  public user_id!: number;
  public role!: 'admin' | 'editor' | 'viewer';
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

WorkspaceMember.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    workspace_id: {
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
    tableName: 'workspace_members',
    timestamps: true,
    underscored: true,
  },
);

export default WorkspaceMember;
