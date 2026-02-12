import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * DC Court table attributes
 */
interface DcCourtAttributes {
  id: number;
  name?: string;
  d_court_id?: string;
  state_id?: string;
  district_id?: string;
  own_state_id?: number;
  own_district_id?: number;
  own_complex_id?: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Attributes allowed during creation
 */
interface DcCourtCreationAttributes extends Optional<
  DcCourtAttributes,
  | 'id'
  | 'name'
  | 'd_court_id'
  | 'state_id'
  | 'district_id'
  | 'own_state_id'
  | 'own_district_id'
  | 'own_complex_id'
> {}

/**
 * DcCourt Model
 */
class DcCourt
  extends Model<DcCourtAttributes, DcCourtCreationAttributes>
  implements DcCourtAttributes
{
  public id!: number;
  public name?: string;
  public d_court_id?: string;
  public state_id?: string;
  public district_id?: string;
  public own_state_id?: number;
  public own_district_id?: number;
  public own_complex_id?: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

DcCourt.init(
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
    d_court_id: {
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
    own_complex_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dc_complex',
        key: 'id',
      },
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
    tableName: 'dc_court',
    timestamps: true,
  },
);

export default DcCourt;
