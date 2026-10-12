import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface UserRecordAttributes {
  id: number;
  user_id: number;
  first_name?: string;
  last_name?: string;
  time?: string;

  plan_id?: number;
  plan_type?: string;

  status: 'ACTIVE' | 'EXPIRE' | 'PENDING' | 'SUSPENDED';
  is_recharge: boolean;
  is_package: boolean;
  emergency_plan_used: boolean;

  package_validity?: Date;
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
  plan_purchased_count?: number;

  created_at?: Date;
  updated_at?: Date;
}

export interface UserRecordCreationAttributes
  extends Optional<
    UserRecordAttributes,
    | 'id'
    | 'status'
    | 'is_recharge'
    | 'is_package'
    | 'emergency_plan_used'
    | 'package_validity'
    | 'plan_id'
    | 'plan_type'
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
    | 'plan_purchased_count'
    | 'created_at'
    | 'updated_at'
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

  public plan_id?: number;
  public plan_type?: string;

  public status!: 'ACTIVE' | 'EXPIRE' | 'PENDING' | 'SUSPENDED';
  public is_recharge!: boolean;
  public is_package!: boolean;
  public emergency_plan_used!: boolean;

  public package_validity?: Date;
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
  public plan_purchased_count?: number;

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
      references: {
        model: 'users',
        key: 'user_id',
      },
      // IMPORTANT: unique: true removed
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    time: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    plan_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM(
        'ACTIVE',
        'EXPIRE',
        'PENDING',
        'SUSPENDED'
      ),
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

    emergency_plan_used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    package_validity: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    total_minutes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    bonus_minutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

    used_minutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      allowNull: true,
    },

    payment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    payment_status: {
      type: DataTypes.ENUM('SUCCESS', 'FAILED', 'PENDING'),
      allowNull: true,
      defaultValue: 'PENDING',
    },

    is_trial_buy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    plan_purchased_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'user_record',
    timestamps: true,
    underscored: true,
  }
);

export default UserRecord;