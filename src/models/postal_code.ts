import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * Postal code table attributes (GeoNames Postal Code format)
 */
export interface PostalCodeAttributes {
  id: number;
  country_code?: string;
  postal_code?: string;
  place_name?: string;
  admin_name1?: string;
  admin_code1?: string;
  admin_name2?: string;
  admin_code2?: string;
  admin_name3?: string;
  admin_code3?: string;
  latitude?: number | null;
  longitude?: number | null;
  accuracy?: number | null;
}

/**
 * Attributes allowed during creation
 */
export interface PostalCodeCreationAttributes extends Optional<
  PostalCodeAttributes,
  | 'id'
  | 'country_code'
  | 'postal_code'
  | 'place_name'
  | 'admin_name1'
  | 'admin_code1'
  | 'admin_name2'
  | 'admin_code2'
  | 'admin_name3'
  | 'admin_code3'
  | 'latitude'
  | 'longitude'
  | 'accuracy'
> {}

/**
 * Postal Code Model
 */
class PostalCode
  extends Model<PostalCodeAttributes, PostalCodeCreationAttributes>
  implements PostalCodeAttributes
{
  public id!: number;
  public country_code?: string;
  public postal_code?: string;
  public place_name?: string;
  public admin_name1?: string;
  public admin_code1?: string;
  public admin_name2?: string;
  public admin_code2?: string;
  public admin_name3?: string;
  public admin_code3?: string;
  public latitude?: number | null;
  public longitude?: number | null;
  public accuracy?: number | null;
}

PostalCode.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    country_code: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    postal_code: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    place_name: {
      type: DataTypes.STRING(180),
      allowNull: true,
    },
    admin_name1: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    admin_code1: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    admin_name2: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    admin_code2: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    admin_name3: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    admin_code3: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
    },
    accuracy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    tableName: 'postal_codes',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['country_code', 'postal_code', 'place_name'],
      },
    ],
  },
);

export default PostalCode;