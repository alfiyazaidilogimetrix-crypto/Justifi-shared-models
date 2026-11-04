import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface CampaignAttributes {
  id: number;
  name: string;
  description?: string;
  start_date: string;
  end_date: string;
  daily_limit: number;
  daily_trigger_time: string; // e.g. "10:00" in 24hr format
  total_target: number;
  total_sent: number;
  status: 'SCHEDULED' | 'ACTIVE' | 'PAUSED' | 'COMPLETED';
  last_automated_run_at?: Date | null;
  created_at?: Date;
  updated_at?: Date;
}

export interface CampaignCreationAttributes
  extends Optional<
    CampaignAttributes,
    | 'id'
    | 'description'
    | 'daily_limit'
    | 'daily_trigger_time'
    | 'total_target'
    | 'total_sent'
    | 'status'
    | 'last_automated_run_at'
    | 'created_at'
    | 'updated_at'
  > {}

class Campaign
  extends Model<CampaignAttributes, CampaignCreationAttributes>
  implements CampaignAttributes
{
  public id!: number;
  public name!: string;
  public description?: string;
  public start_date!: string;
  public end_date!: string;
  public daily_limit!: number;
  public daily_trigger_time!: string;
  public total_target!: number;
  public total_sent!: number;
  public status!: 'SCHEDULED' | 'ACTIVE' | 'PAUSED' | 'COMPLETED';
  public last_automated_run_at?: Date | null;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Campaign.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    daily_limit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500,
    },
    daily_trigger_time: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '10:00',
    },
    total_target: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    total_sent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM('SCHEDULED', 'ACTIVE', 'PAUSED', 'COMPLETED'),
      allowNull: false,
      defaultValue: 'SCHEDULED',
    },
    last_automated_run_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'campaigns',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        fields: ['status'],
      },
      {
        fields: ['start_date'],
      },
      {
        fields: ['end_date'],
      },
    ],
  }
);

export default Campaign;
