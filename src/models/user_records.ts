import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface UserRecordAttributes {
  id: number;
  user_id: number;
  first_name?: string;
  last_name?: string;
  time?: string;
  status: 'ACTIVE' | 'EXPIRE' | 'PENDING' | 'SUSPENDED';
  is_recharge: boolean;
  is_package: boolean;
  package_validity?: Date;
  plan_id?: number;
  total_minutes?: number;
  bonus_minutes?: number;
  used_minutes?: number;
  remaining_minutes?: number;
  valid_from?: Date;
  valid_till?: Date;
  duration_type?: 'MINUTES' | 'MONTHLY' | 'YEARLY';
  payment_id?: string;
  payment_status?: 'SUCCESS' | 'FAILED' | 'PENDING';
  is_trial_buy?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface UserRecordCreationAttributes extends Optional<
  UserRecordAttributes,
  'id'
  | 'status'
  | 'is_recharge'
  | 'is_package'
  | 'package_validity'
  | 'plan_id'
  | 'total_minutes'
  | 'bonus_minutes'
  | 'used_minutes'
  | 'remaining_minutes'
  | 'valid_from'
  | 'valid_till'
  | 'duration_type'
  | 'payment_id'
  | 'payment_status'
  | 'is_trial_buy'
  | 'created_at'
  | 'updated_at'
> { }

class UserRecord
  extends Model<UserRecordAttributes, UserRecordCreationAttributes>
  implements UserRecordAttributes {
  public id!: number;
  public user_id!: number;
  public first_name?: string;
  public last_name?: string;
  public time?: string;
  public status!: 'ACTIVE' | 'EXPIRE' | 'PENDING' | 'SUSPENDED';
  public is_recharge!: boolean;
  public is_package!: boolean;
  public package_validity?: Date;
  public plan_id?: number;
  public total_minutes?: number;
  public bonus_minutes?: number;
  public used_minutes?: number;
  public remaining_minutes?: number;
  public valid_from?: Date;
  public valid_till?: Date;
  public duration_type?: 'MINUTES' | 'MONTHLY' | 'YEARLY';
  public payment_id?: string;
  public payment_status?: 'SUCCESS' | 'FAILED' | 'PENDING';
  public is_trial_buy?: boolean;
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
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_minutes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    bonus_minutes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
    ,
    used_minutes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    remaining_minutes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    valid_from: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    valid_till: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    duration_type: {
      type: DataTypes.ENUM('MINUTES', 'MONTHLY', 'YEARLY'),
    },
    payment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    }
    ,
    payment_status: {
      type: DataTypes.ENUM('SUCCESS', 'FAILED', 'PENDING'),
      defaultValue: 'PENDING',
    },
    is_trial_buy: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
  {
    sequelize,
    tableName: 'user_record',
    timestamps: true,
    underscored: true,
  },
);

export default UserRecord;
