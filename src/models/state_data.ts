import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * State table attributes
 */
interface StateAttributes {
  id: number;
  name?: string;
  state_id?: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Attributes allowed during creation
 */
interface StateCreationAttributes extends Optional<
  StateAttributes,
  'id' | 'name' | 'state_id'
> {}

/**
 * State Model
 */
class StateData
  extends Model<StateAttributes, StateCreationAttributes>
  implements StateAttributes
{
  public id!: number;
  public name?: string;
  public state_id?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

StateData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    state_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'state_data',
    timestamps: true,
  },
);

export default StateData;
