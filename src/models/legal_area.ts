import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface LegalAreaAttributes {
  id: number;
  legal_area: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface LegalAreaCreationAttributes extends Optional<
  LegalAreaAttributes,
  'id' | 'legal_area' | 'createdAt' | 'updatedAt'
> {}

class LegalArea
  extends Model<LegalAreaAttributes, LegalAreaCreationAttributes>
  implements LegalAreaAttributes
{
  public id!: number;
  public legal_area!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

LegalArea.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    legal_area: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'legal_area',
    timestamps: false,
    underscored: true,
  },
);

export default LegalArea;
