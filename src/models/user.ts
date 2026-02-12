import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * User table attributes
 */
interface UserAttributes {
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
}

/**
 * Attributes allowed during creation
 */
interface UserCreationAttributes extends Optional<
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
> {}

/**
 * User Model
 */
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
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
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false, // matches original JS model
  },
);

export default User;
