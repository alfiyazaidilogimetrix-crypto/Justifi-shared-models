import sequelize from '../config/db';
import { DataTypes, Model, Optional } from 'sequelize';

// Export the interfaces
export interface FileAttributes {
  id: number;
  filename: string;
  original_name: string;
  mime_type: string;
  size: number;
  file_path: string;
  file_content: Buffer;
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
  public file_path!: string;
  public file_content!: Buffer;
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
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: 'Generated filename for storage',
    },
    original_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: 'Original filename from user',
    },
    mime_type: {
      type: DataTypes.STRING(100),
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
    file_path: {
      type: DataTypes.STRING(500),
      allowNull: false,
      comment: 'Path to the stored file',
    },
    file_content: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
      comment: 'Actual file content stored in database',
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
