import sequelize from '../config/db';
import { DataTypes, Model, Optional } from 'sequelize';

export interface FileShareAttributes {
  id: number;
  file_id: number;
  shared_by: number;
  shared_with: number;
  access_type: 'view' | 'download' | 'edit';
  expires_at?: Date | null;
  is_active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FileShareCreationAttributes extends Optional<
  FileShareAttributes,
  'id' | 'expires_at' | 'is_active' | 'createdAt' | 'updatedAt'
> {}

class FileShare
  extends Model<FileShareAttributes, FileShareCreationAttributes>
  implements FileShareAttributes
{
  public id!: number;
  public file_id!: number;
  public shared_by!: number;
  public shared_with!: number;
  public access_type!: 'view' | 'download' | 'edit';
  public expires_at?: Date | null;
  public is_active!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

FileShare.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    file_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shared_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shared_with: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    access_type: {
      type: DataTypes.ENUM('view', 'download', 'edit'),
      allowNull: false,
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'file_shares',
    timestamps: true,
    underscored: true,
  },
);

export default FileShare;
