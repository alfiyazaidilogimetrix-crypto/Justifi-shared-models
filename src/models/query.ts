import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface QueryAttributes {
  id: number;
  title: string;
  description: string;
  category: number;
  query: string;
  is_closed: boolean;
  user_id?: number;
  medias?: number[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface QueryCreationAttributes extends Optional<
  QueryAttributes,
  | 'id'
  | 'query'
  | 'title'
  | 'description'
  | 'category'
  | 'is_closed'
  | 'user_id'
  | 'medias'
  | 'createdAt'
  | 'updatedAt'
> {}

class Query
  extends Model<QueryAttributes, QueryCreationAttributes>
  implements QueryAttributes
{
  public id!: number;
  public user_id!: number;
  public query!: string;
  public title!: string;
  public description!: string;
  public category!: number;
  public is_closed!: boolean;
  public medias!: number[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  userid: number | undefined;
}

Query.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'legal_area',
        key: 'id',
      },
    },
    query: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_closed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    medias: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
      defaultValue: [],
    },
  },
  {
    sequelize,
    tableName: 'queries',
    timestamps: true,
    underscored: true,
  },
);

export default Query;
