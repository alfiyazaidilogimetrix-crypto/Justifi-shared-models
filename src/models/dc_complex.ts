import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * DC Complex table attributes
 */
interface DcComplexAttributes {
  id: number;
  name?: string;
  complex_id?: string;
  state_id?: string;
  district_id?: string;
  own_state_id?: number;
  own_district_id?: number;
  est_code?: string;
  source?: string;
  raw?: object;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Attributes allowed during creation
 */
interface DcComplexCreationAttributes extends Optional<
  DcComplexAttributes,
  | 'id'
  | 'name'
  | 'complex_id'
  | 'state_id'
  | 'district_id'
  | 'own_state_id'
  | 'own_district_id'
  | 'est_code'
  | 'source'
  | 'raw'
> {}

/**
 * DcComplex Model
 */
class DcComplex
  extends Model<DcComplexAttributes, DcComplexCreationAttributes>
  implements DcComplexAttributes
{
  public id!: number;
  public name?: string;
  public complex_id?: string;
  public state_id?: string;
  public district_id?: string;
  public own_state_id?: number;
  public own_district_id?: number;
  public est_code?: string;
  public source?: string;
  public raw?: object;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

DcComplex.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    complex_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    district_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    own_state_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'state_data',
        key: 'id',
      },
    },
    own_district_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'district_data',
        key: 'id',
      },
    },
    est_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'ecourts',
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
    tableName: 'dc_complex',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['complex_id', 'own_district_id'],
        name: 'uniq_complex_per_district',
      },
    ],
  },
);

export default DcComplex;
