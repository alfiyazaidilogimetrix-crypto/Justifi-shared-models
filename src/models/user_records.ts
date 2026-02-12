import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface UserRecordAttributes {
  id: number;
  user_id: number;
  first_name?: string;
  last_name?: string;
  time?: string;
  status: 'ACTIVE' | 'EXPIRE' | 'PENDING' | 'SUSPENDED';
  is_recharge: boolean;
  is_package: boolean;

  package_validity?: Date;
  created_at?: Date;
  updated_at?: Date;
}

interface UserRecordCreationAttributes extends Optional<
  UserRecordAttributes,
  'id' | 'status' | 'is_recharge' | 'is_package' | 'created_at' | 'updated_at'
> {}

class UserRecord
  extends Model<UserRecordAttributes, UserRecordCreationAttributes>
  implements UserRecordAttributes
{
  public id!: number;
  public user_id!: number;
  public first_name?: string;
  public last_name?: string;
  public time?: string;
  public status!: 'ACTIVE' | 'EXPIRE' | 'PENDING' | 'SUSPENDED';
  public is_recharge!: boolean;
  public is_package!: boolean;
  public package_validity?: Date;
  public created_at?: Date;
  public updated_at?: Date;
}

UserRecord.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: 'users',
        key: 'user_id',
      },
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('ACTIVE', 'EXPIRE', 'PENDING', 'SUSPENDED'),
      allowNull: false,
      defaultValue: 'ACTIVE',
    },
    is_recharge: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    is_package: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    package_validity: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'user_record',
    timestamps: true,
    underscored: true,
  },
);

export default UserRecord;
