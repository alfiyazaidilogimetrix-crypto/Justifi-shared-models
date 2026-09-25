import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface RylawChatAttributes {
  id: number;
  user_id: number;
  file_id?: number;
  file_summary?: string;
  session_id: string;
  session_name?: string;
  query: string;
  response: string;
  created_at: Date;
  severity?: string;
  category?: string;
  premium_plan_unlocked?: string;
}

export interface RylawChatCreationAttributes extends Optional<
  RylawChatAttributes,
  'id' | 'severity' | 'category' | 'created_at' | 'premium_plan_unlocked' | 'session_name'
> {}

class RylawChat
  extends Model<RylawChatAttributes, RylawChatCreationAttributes>
  implements RylawChatAttributes
{
  public id!: number;
  public user_id!: number;
  public file_id!: number;
  public session_id!: string;
  public session_name?: string;
  public query!: string;
  public response!: string;
  public created_at!: Date;
  public severity!: string;
  public category!: string;
  public premium_plan_unlocked!: string;
}

RylawChat.init(
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
    session_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    session_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    query: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    severity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    file_summary: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    file_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    premium_plan_unlocked: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'rylaw_chat',
    timestamps: false,
    underscored: true,
  },
);

export default RylawChat;
