import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';
import DcComplex from './dc_complex';

/**
 * DC Advocate Case table attributes
 */
interface DcAdvCaseAttributes {
  id: number;
  cnr?: string;
  title?: string;
  date_of_decision?: string;
  case_number?: string;
  filing_number?: string;
  filing_year?: string;
  type?: string;
  own_district_id?: number;
  district_id?: string;
  advocate_name?: string;
  raw?: object;
  complex_id?: string;
  own_complex_id?: number;
  state_id?: string;
  own_state_id?: number;
  bar_state?: string;
  bar_code?: string;
  bar_year?: string;
  search_type?: string;
  lawyer_id?: number;
  request_id?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Attributes allowed during creation
 */
interface DcAdvCaseCreationAttributes extends Optional<
  DcAdvCaseAttributes,
  | 'id'
  | 'cnr'
  | 'title'
  | 'date_of_decision'
  | 'case_number'
  | 'filing_number'
  | 'filing_year'
  | 'type'
  | 'own_district_id'
  | 'district_id'
  | 'advocate_name'
  | 'raw'
  | 'complex_id'
  | 'own_complex_id'
  | 'state_id'
  | 'own_state_id'
  | 'bar_state'
  | 'bar_code'
  | 'bar_year'
  | 'search_type'
  | 'lawyer_id'
  | 'request_id'
> {}

/**
 * DcAdvCase Model
 */
class DcAdvCase
  extends Model<DcAdvCaseAttributes, DcAdvCaseCreationAttributes>
  implements DcAdvCaseAttributes
{
  public id!: number;
  public cnr?: string;
  public title?: string;
  public date_of_decision?: string;
  public case_number?: string;
  public filing_number?: string;
  public filing_year?: string;
  public type?: string;
  public own_district_id?: number;
  public district_id?: string;
  public advocate_name?: string;
  public raw?: object;
  public complex_id?: string;
  public own_complex_id?: number;
  public state_id?: string;
  public own_state_id?: number;
  public bar_state?: string;
  public bar_code?: string;
  public bar_year?: string;
  public search_type?: string;
  public lawyer_id?: number;
  public request_id?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

DcAdvCase.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cnr: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_decision: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    case_number: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    filing_number: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    filing_year: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    own_district_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    district_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    advocate_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    raw: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    complex_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    own_complex_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dc_complex',
        key: 'id',
      },
    },
    state_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    own_state_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bar_state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bar_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bar_year: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    search_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lawyer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'lawyers',
        key: 'id',
      },
    },
    request_id: {
      type: DataTypes.UUID,
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
    tableName: 'dc_adv_cases',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['cnr', 'own_complex_id'],
        name: 'uniq_adv_case',
      },
    ],
  },
);

/**
 * Associations
 * One DC Advocate Case belongs to one DC Complex
 */
DcAdvCase.belongsTo(DcComplex, {
  foreignKey: 'own_complex_id',
  as: 'complex_details',
});

export default DcAdvCase;
