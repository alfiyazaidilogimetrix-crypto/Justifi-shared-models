import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * DC Case Detail table attributes
 */
interface DcCaseDetailAttributes {
  id: number;
  cnr: string;
  title?: string;
  actsAndSections?: object;
  details?: object;
  firstInformationReport?: object;
  history?: object;
  orders?: object;
  parties?: object;
  status?: object;
  case_status?: string;
  adv_cases_id: number;
  raw?: object;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Attributes allowed during creation
 */
interface DcCaseDetailCreationAttributes extends Optional<
  DcCaseDetailAttributes,
  | 'id'
  | 'title'
  | 'actsAndSections'
  | 'details'
  | 'firstInformationReport'
  | 'history'
  | 'orders'
  | 'parties'
  | 'status'
  | 'case_status'
  | 'raw'
> {}

/**
 * DcCaseDetail Model
 */
class DcCaseDetail
  extends Model<DcCaseDetailAttributes, DcCaseDetailCreationAttributes>
  implements DcCaseDetailAttributes
{
  public id!: number;
  public cnr!: string;
  public title?: string;
  public actsAndSections?: object;
  public details?: object;
  public firstInformationReport?: object;
  public history?: object;
  public orders?: object;
  public parties?: object;
  public status?: object;
  public case_status?: string;
  public adv_cases_id!: number;
  public raw?: object;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

DcCaseDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cnr: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    actsAndSections: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    details: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    firstInformationReport: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    history: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    orders: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    parties: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    status: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    case_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adv_cases_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'dc_adv_cases',
        key: 'id',
      },
    },
    raw: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'dc_case_details',
    timestamps: true,
  },
);

export default DcCaseDetail;
