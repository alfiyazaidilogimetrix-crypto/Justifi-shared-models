import sequelize from '../config/db';
import { DataTypes, Model, Optional } from 'sequelize';

export interface FolderAttributes {
  id: number;
  name: string;
  workspace_id?: number | null;
  parent_folder_id?: number | null;
  created_by: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FolderCreationAttributes extends Optional<
  FolderAttributes,
  'id' | 'workspace_id' | 'parent_folder_id' | 'createdAt' | 'updatedAt'
> {}

class Folder
  extends Model<FolderAttributes, FolderCreationAttributes>
  implements FolderAttributes
{
  public id!: number;
  public name!: string;
  public workspace_id?: number | null;
  public parent_folder_id?: number | null;
  public created_by!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Folder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    workspace_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    parent_folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'folders',
    timestamps: true,
    underscored: true,
  },
);

export default Folder;
