import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * User table attributes
 */
export interface UserAttributes {
  user_id: number;
  username: string;
  email: string;
  encrypted_password?: string;
  master_password?: string;
  user_type?: string;
  plan_id?: number;
  parent_user_id?: number;
  firm_id?: number;
  subscription_status?: boolean;
  subscription_date?: Date;
  googleId?: string;
  district_data_id?: string[];
  state_id?: string[];
  is_blocked?: boolean;
  block_reason?: string;
  blocked_at?: Date;
  city?: string;
  state?: string;
  preferred_language?: string;
  latitude?: number | null;
  longitude?: number | null;
}

/**
 * Attributes allowed during creation
 */
export interface UserCreationAttributes extends Optional<
  UserAttributes,
  | 'user_id'
  | 'encrypted_password'
  | 'master_password'
  | 'user_type'
  | 'plan_id'
  | 'parent_user_id'
  | 'firm_id'
  | 'subscription_status'
  | 'subscription_date'
  | 'googleId'
  | 'district_data_id'
  | 'state_id'
  | 'is_blocked'
  | 'block_reason'
  | 'blocked_at'
  | 'city'
  | 'state'
  | 'preferred_language'
  | 'latitude'
  | 'longitude'
> { }

/**
 * User Model
 */
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public user_id!: number;
  public username!: string;
  public email!: string;
  public encrypted_password?: string;
  public master_password?: string;
  public user_type?: string;
  public plan_id?: number;
  public parent_user_id?: number;
  public firm_id?: number;
  public subscription_status?: boolean;
  public subscription_date?: Date;
  public googleId?: string;
  public district_data_id?: string[];
  public state_id?: string[];
  public is_blocked?: boolean;
  public block_reason?: string;
  public blocked_at?: Date;
  public city?: string;
  public state?: string;
  public preferred_language?: string;
  public latitude?: number | null;
  public longitude?: number | null;
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    encrypted_password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    master_password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    user_type: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    parent_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    firm_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    subscription_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    subscription_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    district_data_id: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    state_id: { type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: true },
    is_blocked: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
    block_reason: { type: DataTypes.TEXT, allowNull: true },
    blocked_at: { type: DataTypes.DATE, allowNull: true },
    city: { type: DataTypes.STRING(255), allowNull: true },
    state: { type: DataTypes.STRING(255), allowNull: true },
    preferred_language: { type: DataTypes.STRING(255), allowNull: true },
    latitude: { type: DataTypes.DOUBLE, allowNull: true, defaultValue: null },
    longitude: { type: DataTypes.DOUBLE, allowNull: true, defaultValue: null },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false, // matches original JS model
  },
);

export default User;
