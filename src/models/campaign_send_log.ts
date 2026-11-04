import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface CampaignSendLogAttributes {
  id: number;
  campaign_id?: number | null;
  lawyer_id?: number | null;
  email: string;
  status: 'SENT' | 'FAILED';
  message_id?: string | null;
  error_message?: string | null;
  is_opened?: boolean;
  opened_at?: Date | null;
  open_count?: number;
  delivery_status?: 'PENDING' | 'DELIVERED' | 'BOUNCED' | 'COMPLAINT' | null;
  bounce_type?: string | null;
  sent_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface CampaignSendLogCreationAttributes
  extends Optional<
    CampaignSendLogAttributes,
    | 'id'
    | 'campaign_id'
    | 'lawyer_id'
    | 'message_id'
    | 'error_message'
    | 'is_opened'
    | 'opened_at'
    | 'open_count'
    | 'delivery_status'
    | 'bounce_type'
    | 'sent_at'
    | 'created_at'
    | 'updated_at'
  > {}

class CampaignSendLog
  extends Model<CampaignSendLogAttributes, CampaignSendLogCreationAttributes>
  implements CampaignSendLogAttributes
{
  public id!: number;
  public campaign_id?: number | null;
  public lawyer_id?: number | null;
  public email!: string;
  public status!: 'SENT' | 'FAILED';
  public message_id?: string | null;
  public error_message?: string | null;
  public is_opened?: boolean;
  public opened_at?: Date | null;
  public open_count?: number;
  public delivery_status?: 'PENDING' | 'DELIVERED' | 'BOUNCED' | 'COMPLAINT' | null;
  public bounce_type?: string | null;
  public sent_at?: Date;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

CampaignSendLog.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    campaign_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'campaigns',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    lawyer_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'campaign_lawyers',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('SENT', 'FAILED'),
      allowNull: false,
    },
    message_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    error_message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    is_opened: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    opened_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    open_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    delivery_status: {
      type: DataTypes.ENUM('PENDING', 'DELIVERED', 'BOUNCED', 'COMPLAINT'),
      allowNull: true,
      defaultValue: 'PENDING',
    },
    bounce_type: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    sent_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'campaign_send_logs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        fields: ['campaign_id'],
      },
      {
        fields: ['email'],
      },
      {
        fields: ['status'],
      },
      {
        fields: ['is_opened'],
      },
      {
        fields: ['delivery_status'],
      },
      {
        fields: ['sent_at'],
      },
    ],
  }
);

export default CampaignSendLog;
