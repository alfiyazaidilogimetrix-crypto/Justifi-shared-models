import sequelize from '../config/db';
import { DataTypes, Model, Optional } from 'sequelize';

export interface WorkspaceAttributes {
  id: number;
  name: string;
  description?: string;
  type: string;
  owner_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface WorkspaceCreationAttributes extends Optional<
  WorkspaceAttributes,
  'id' | 'type' | 'description' | 'createdAt' | 'updatedAt'
> {}

class Workspace
  extends Model<WorkspaceAttributes, WorkspaceCreationAttributes>
  implements WorkspaceAttributes
{
  public id!: number;
  public name!: string;
  public type!: string;
  public description?: string;
  public owner_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Workspace.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('personal', 'team', 'project'),
      defaultValue: 'personal',
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'workspaces',
    timestamps: true,
    underscored: true,
  },
);

export default Workspace;
