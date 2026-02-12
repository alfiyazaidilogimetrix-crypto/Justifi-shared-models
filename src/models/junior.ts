import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * Junior table attributes
 */
interface JuniorAttributes {
  id: number;
  user_id?: number;
  lawyer_id?: number;
}

/**
 * Attributes allowed during creation
 */
interface JuniorCreationAttributes extends Optional<
  JuniorAttributes,
  'id' | 'user_id' | 'lawyer_id'
> {}

/**
 * Junior Model
 */
class Junior
  extends Model<JuniorAttributes, JuniorCreationAttributes>
  implements JuniorAttributes
{
  public id!: number;
  public user_id?: number;
  public lawyer_id?: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Junior.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lawyer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'juniors',
    timestamps: true,
  },
);

export default Junior;
