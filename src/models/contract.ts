import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface ContractAttributes {
  id: number;
  title: string;
  type: string;
  parties: any; // JSON
  value?: number;
  status: 'signed' | 'under_review' | 'draft';
  risk_level: 'high' | 'medium' | 'low';
  expiry?: Date;
  document_content?: string;
  disclaimer?: string;
  language?: string;
  jurisdiction?: string;
  specific_terms?: string;
  user_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ContractCreationAttributes extends Optional<
  ContractAttributes,
  | 'id'
  | 'value'
  | 'expiry'
  | 'document_content'
  | 'disclaimer'
  | 'language'
  | 'jurisdiction'
  | 'specific_terms'
  | 'createdAt'
  | 'updatedAt'
> {}

class Contract
  extends Model<ContractAttributes, ContractCreationAttributes>
  implements ContractAttributes
{
  public id!: number;
  public title!: string;
  public type!: string;
  public parties!: any;
  public value?: number;
  public status!: 'signed' | 'under_review' | 'draft';
  public risk_level!: 'high' | 'medium' | 'low';
  public expiry?: Date;
  public document_content?: string;
  public disclaimer?: string;
  public language?: string;
  public jurisdiction?: string;
  public specific_terms?: string;
  public user_id!: number;

  public createdAt?: Date;
  public updatedAt?: Date;
}

Contract.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parties: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('signed', 'under_review', 'draft'),
      allowNull: false,
      defaultValue: 'draft',
    },
    risk_level: {
      type: DataTypes.ENUM('high', 'medium', 'low'),
      allowNull: false,
      defaultValue: 'medium',
    },
    expiry: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    document_content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    disclaimer: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jurisdiction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specific_terms: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'contracts',
    timestamps: true,
    underscored: true,
  },
);

export default Contract;
