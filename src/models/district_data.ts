import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * District table attributes
 */
interface DistrictAttributes {
  id: number;
  name?: string;
  district_id?: string;
  state_id?: string;
  own_state_id?: number;
}

/**
 * Attributes allowed during creation
 */
interface DistrictCreationAttributes extends Optional<
  DistrictAttributes,
  'id' | 'name' | 'district_id' | 'state_id' | 'own_state_id'
> {}

/**
 * District Model
 */
class District
  extends Model<DistrictAttributes, DistrictCreationAttributes>
  implements DistrictAttributes
{
  public id!: number;
  public name?: string;
  public district_id?: string;
  public state_id?: string;
  public own_state_id?: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

District.init(
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
    district_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    own_state_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'district_data',
    timestamps: true,
  },
);

export default District;
