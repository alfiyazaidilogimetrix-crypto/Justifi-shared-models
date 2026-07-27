import sequelize from '../config/db';
import { DataTypes, Model, Optional } from 'sequelize';

// Export the interfaces
export interface FileAttributes {
  id: number;
  filename: string;
  original_name: string;
  mime_type: string;
  size: number;
  file_url: string;
  folder_name: string;
  folder_id?: number; // Optional foreign key to Folder
  workspace_id?: number; // Optional foreign key to Workspace
  owner_id?: number; // Optional foreign key to User
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FileCreationAttributes extends Optional<
  FileAttributes,
  'id' | 'createdAt' | 'updatedAt'
> {}

class File
  extends Model<FileAttributes, FileCreationAttributes>
  implements FileAttributes
{
  public id!: number;
  public filename!: string;
  public original_name!: string;
  public mime_type!: string;
  public size!: number;
  public folder_name!: string;
  public file_url!: string;
  public folder_id?: number;
  public workspace_id?: number;
  public owner_id?: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

File.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Generated filename for storage',
    },
    original_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Original filename from user',
    },
    mime_type: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'MIME type of the file',
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'File size in bytes',
      validate: {
        min: 0,
      },
    },
    folder_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    file_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    workspace_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'files',
    timestamps: true,
    underscored: true,
  },
);

export default File;
