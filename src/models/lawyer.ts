import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * Lawyer table attributes
 */
interface LawyerAttributes {
  id: number;
  lawyer_name?: string;
  licence_no?: string;
  ratings?: number;
  cases_win?: number;
  contact_no?: string;
  judiciary_courts?: string;
  age?: number;
  email_id?: string;
  bar_council_reg_no?: string;
  bar_council_certificate?: number;
  state_council_reg_no?: string;
  state_council_certificate?: number;
  certificate_for_practice?: number;
  areas_of_expertise?: number[];
  legal_undertaking?: number;
  pan_number?: string;
  aadhar_number?: string;
  bank_account_number?: string;
  ifsc_code?: string;
  upi_id?: string;
  documents_uploaded?: boolean;
  pan_verified?: boolean;
  aadhar_verified?: boolean;
  is_verified?: boolean;
  district_data_id?: string[];
  state_id?: string[];
  languages_known?: string[];
  court_type?: string;
  international_litigation_experience?: string;
  plan?: string;
  mobile_no?: string;
  dob?: Date;
  address?: string;
  pincode?: string;
  city?: string;
  state?: string;
  address_line1?: string;
  address_line2?: string;
  landmark?: string;
  alternate_mobile_no?: string;
  user_id: number;
  Qualification?: string;
  experience?: string;
}

/**
 * Attributes allowed during creation
 */
interface LawyerCreationAttributes extends Optional<
  LawyerAttributes,
  | 'id'
  | 'lawyer_name'
  | 'licence_no'
  | 'ratings'
  | 'cases_win'
  | 'contact_no'
  | 'judiciary_courts'
  | 'age'
  | 'email_id'
  | 'bar_council_reg_no'
  | 'bar_council_certificate'
  | 'state_council_reg_no'
  | 'state_council_certificate'
  | 'certificate_for_practice'
  | 'areas_of_expertise'
  | 'legal_undertaking'
  | 'pan_number'
  | 'aadhar_number'
  | 'bank_account_number'
  | 'ifsc_code'
  | 'upi_id'
  | 'documents_uploaded'
  | 'pan_verified'
  | 'aadhar_verified'
  | 'is_verified'
  | 'district_data_id'
  | 'state_id'
  | 'languages_known'
  | 'court_type'
  | 'international_litigation_experience'
  | 'plan'
  | 'mobile_no'
  | 'dob'
  | 'address'
  | 'pincode'
  | 'city'
  | 'state'
  | 'address_line1'
  | 'address_line2'
  | 'landmark'
  | 'alternate_mobile_no'
  | 'Qualification'
  | 'experience'
> {}

/**
 * Lawyer Model
 */
class Lawyer
  extends Model<LawyerAttributes, LawyerCreationAttributes>
  implements LawyerAttributes
{
  public id!: number;
  public lawyer_name?: string;
  public licence_no?: string;
  public ratings?: number;
  public cases_win?: number;
  public contact_no?: string;
  public judiciary_courts?: string;
  public age?: number;
  public email_id?: string;
  public bar_council_reg_no?: string;
  public bar_council_certificate?: number;
  public state_council_reg_no?: string;
  public state_council_certificate?: number;
  public certificate_for_practice?: number;
  public areas_of_expertise?: number[];
  public legal_undertaking?: number;
  public pan_number?: string;
  public aadhar_number?: string;
  public bank_account_number?: string;
  public ifsc_code?: string;
  public upi_id?: string;
  public documents_uploaded?: boolean;
  public pan_verified?: boolean;
  public aadhar_verified?: boolean;
  public is_verified?: boolean;
  public district_data_id?: string[];
  public state_id?: string[];
  public languages_known?: string[];
  public court_type?: string;
  public international_litigation_experience?: string;
  public plan?: string;
  public mobile_no?: string;
  public dob?: Date;
  public address?: string;
  public pincode?: string;
  public city?: string;
  public state?: string;
  public address_line1?: string;
  public address_line2?: string;
  public landmark?: string;
  public alternate_mobile_no?: string;
  public user_id!: number;
  public Qualification?: string;
  public experience?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Lawyer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    lawyer_name: { type: DataTypes.STRING, allowNull: true },
    licence_no: { type: DataTypes.STRING, allowNull: true },
    ratings: { type: DataTypes.DECIMAL, allowNull: true },
    cases_win: { type: DataTypes.INTEGER, allowNull: true },
    contact_no: { type: DataTypes.STRING, allowNull: true },
    judiciary_courts: { type: DataTypes.TEXT, allowNull: true },
    age: { type: DataTypes.INTEGER, allowNull: true },
    email_id: { type: DataTypes.STRING, allowNull: true },
    bar_council_reg_no: { type: DataTypes.STRING, allowNull: true },
    bar_council_certificate: { type: DataTypes.INTEGER, allowNull: true },
    state_council_reg_no: { type: DataTypes.STRING, allowNull: true },
    state_council_certificate: { type: DataTypes.INTEGER, allowNull: true },
    certificate_for_practice: { type: DataTypes.INTEGER, allowNull: true },
    areas_of_expertise: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },
    legal_undertaking: { type: DataTypes.INTEGER, allowNull: true },
    pan_number: { type: DataTypes.STRING, allowNull: true },
    aadhar_number: { type: DataTypes.STRING, allowNull: true },
    bank_account_number: { type: DataTypes.STRING, allowNull: true },
    ifsc_code: { type: DataTypes.STRING, allowNull: true },
    upi_id: { type: DataTypes.STRING, allowNull: true },
    documents_uploaded: { type: DataTypes.BOOLEAN, defaultValue: false },
    pan_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
    aadhar_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
    is_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
    district_data_id: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    state_id: { type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: true },
    languages_known: { type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: true },
    court_type: { type: DataTypes.STRING, allowNull: true },
    international_litigation_experience: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    plan: { type: DataTypes.STRING, allowNull: true },
    mobile_no: { type: DataTypes.STRING, allowNull: true },
    dob: { type: DataTypes.DATEONLY, allowNull: true },
    address: { type: DataTypes.TEXT, allowNull: true },
    pincode: { type: DataTypes.STRING, allowNull: true },
    city: { type: DataTypes.STRING, allowNull: true },
    state: { type: DataTypes.STRING, allowNull: true },
    address_line1: { type: DataTypes.TEXT, allowNull: true },
    address_line2: { type: DataTypes.TEXT, allowNull: true },
    landmark: { type: DataTypes.TEXT, allowNull: true },
    alternate_mobile_no: { type: DataTypes.STRING, allowNull: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    Qualification: { type: DataTypes.STRING, allowNull: true },
    experience: { type: DataTypes.STRING, allowNull: true },
  },
  {
    sequelize,
    tableName: 'lawyers',
    timestamps: true,
  },
);

export default Lawyer;
