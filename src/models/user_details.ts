import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * UserDetails table attributes
 */
interface UserDetailsAttributes {
  id: number;
  contact_no?: string;
  address?: string;
  pincode?: string;
  city?: string;
  state?: string;
  landmark?: string;
  alternate_mobile_no?: string;
  user_id: number;
}

/**
 * Attributes allowed during creation
 */
interface UserDetailsCreationAttributes extends Optional<
  UserDetailsAttributes,
  | 'id'
  | 'contact_no'
  | 'address'
  | 'pincode'
  | 'city'
  | 'state'
  | 'landmark'
  | 'alternate_mobile_no'
> {}

/**
 * UserDetails Model
 */
class UserDetails
  extends Model<UserDetailsAttributes, UserDetailsCreationAttributes>
  implements UserDetailsAttributes
{
  public id!: number;
  public contact_no?: string;
  public address?: string;
  public pincode?: string;
  public city?: string;
  public state?: string;
  public landmark?: string;
  public alternate_mobile_no?: string;
  public user_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserDetails.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    contact_no: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    landmark: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    alternate_mobile_no: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'user_details',
    timestamps: true,
  },
);

export default UserDetails;
