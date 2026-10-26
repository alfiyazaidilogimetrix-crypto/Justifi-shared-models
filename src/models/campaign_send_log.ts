import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface CampaignSendLogAttributes {
  id: number;
  lawyer_id?: number | null;
  email: string;
  status: 'SENT' | 'FAILED';
  message_id?: string | null;
  error_message?: string | null;
  sent_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface CampaignSendLogCreationAttributes
  extends Optional<
    CampaignSendLogAttributes,
    'id' | 'lawyer_id' | 'message_id' | 'error_message' | 'sent_at' | 'created_at' | 'updated_at'
  > {}

class CampaignSendLog
  extends Model<CampaignSendLogAttributes, CampaignSendLogCreationAttributes>
  implements CampaignSendLogAttributes
{
  public id!: number;
  public lawyer_id?: number | null;
  public email!: string;
  public status!: 'SENT' | 'FAILED';
  public message_id?: string | null;
  public error_message?: string | null;
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
        fields: ['email'],
      },
      {
        fields: ['status'],
      },
      {
        fields: ['sent_at'],
      },
    ],
  }
);

export default CampaignSendLog;
