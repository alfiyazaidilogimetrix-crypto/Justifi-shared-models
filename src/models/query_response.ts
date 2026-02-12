import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface QueryResponseAttributes {
  id: number;
  lawyer_id: number;
  query_id: number;
  response: string;
  isSelect: boolean;
  isSatisfied: boolean;
  review: string;
  rating: number;
  is_user_closed: boolean;
  is_lawyer_closed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface QueryResponseCreationAttributes extends Optional<
  QueryResponseAttributes,
  | 'id'
  | 'isSelect'
  | 'isSatisfied'
  | 'review'
  | 'rating'
  | 'is_user_closed'
  | 'is_lawyer_closed'
  | 'createdAt'
  | 'updatedAt'
> {}

class QueryResponse
  extends Model<QueryResponseAttributes, QueryResponseCreationAttributes>
  implements QueryResponseAttributes
{
  public id!: number;
  public lawyer_id!: number;
  public query_id!: number;
  public response!: string;
  public isSelect!: boolean;
  public isSatisfied!: boolean;
  public review!: string;
  public rating!: number;
  public is_user_closed!: boolean;
  public is_lawyer_closed!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

QueryResponse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    lawyer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    query_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    response: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSelect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isSatisfied: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5,
      },
    },
    is_user_closed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    is_lawyer_closed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'query_response',
    timestamps: true,
    underscored: true,
  },
);

export default QueryResponse;
