import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * Allowed company types
 */
export enum CompanyType {
  PRIVATE_LIMITED = 'Private Limited',
  PUBLIC_LIMITED = 'Public Limited',
  LLP = 'LLP',
  LLC = 'LLC',
  OPC = 'OPC',
  PARTNERSHIP = 'Partnership',
  PROPRIETORSHIP = 'Proprietorship',
}

/**
 * Company table attributes
 */
interface CompanyAttributes {
  id: number;
  company_name: string;
  company_type: CompanyType;
  registration_number?: string;
  pan_number?: string;
  gst_number?: string;
  incorporation_date?: Date;
  registered_address: string;
  district_data_id?: string[];
  state_id?: string[];
  contact_email: string;
  contact_phone: string;
  is_claimed_itc?: boolean;
  user_id: number;
}

/**
 * Attributes allowed during creation
 */
interface CompanyCreationAttributes extends Optional<
  CompanyAttributes,
  | 'id'
  | 'registration_number'
  | 'pan_number'
  | 'gst_number'
  | 'incorporation_date'
  | 'district_data_id'
  | 'state_id'
  | 'is_claimed_itc'
> {}

/**
 * Company Model
 */
class CompanyRegistration
  extends Model<CompanyAttributes, CompanyCreationAttributes>
  implements CompanyAttributes
{
  public id!: number;
  public company_name!: string;
  public company_type!: CompanyType;
  public registration_number?: string;
  public pan_number?: string;
  public gst_number?: string;
  public incorporation_date?: Date;
  public registered_address!: string;
  public district_data_id?: string[];
  public state_id?: string[];
  public contact_email!: string;
  public contact_phone!: string;
  public is_claimed_itc?: boolean;
  public user_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CompanyRegistration.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_type: {
      type: DataTypes.ENUM(...Object.values(CompanyType)),
      allowNull: false,
    },
    registration_number: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    pan_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gst_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    incorporation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    registered_address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    district_data_id: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    state_id: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    contact_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    contact_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_claimed_itc: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'company',
    timestamps: true,
    underscored: true,
  },
);

export default CompanyRegistration;
