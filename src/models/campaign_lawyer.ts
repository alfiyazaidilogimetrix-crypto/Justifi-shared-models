import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface CampaignLawyerAttributes {
  id: number;
  email: string;
  name?: string;
  company?: string;
  mobile?: string;
  address?: string;
  pincode?: string;
  city?: string;
  state?: string;
  website?: string;
  category?: string;
  bar_council_number?: string;
  status: 'PENDING' | 'SENT' | 'FAILED' | 'UNSUBSCRIBED';
  campaign_id?: number | null;
  import_batch_id?: string;
  is_opened?: boolean;
  opened_at?: Date | null;
  last_sent_at?: Date | null;
  created_at?: Date;
  updated_at?: Date;
}

export interface CampaignLawyerCreationAttributes
  extends Optional<
    CampaignLawyerAttributes,
    | 'id'
    | 'name'
    | 'company'
    | 'mobile'
    | 'address'
    | 'pincode'
    | 'city'
    | 'state'
    | 'website'
    | 'category'
    | 'bar_council_number'
    | 'status'
    | 'campaign_id'
    | 'import_batch_id'
    | 'is_opened'
    | 'opened_at'
    | 'last_sent_at'
    | 'created_at'
    | 'updated_at'
  > {}

class CampaignLawyer
  extends Model<CampaignLawyerAttributes, CampaignLawyerCreationAttributes>
  implements CampaignLawyerAttributes
{
  public id!: number;
  public email!: string;
  public name?: string;
  public company?: string;
  public mobile?: string;
  public address?: string;
  public pincode?: string;
  public city?: string;
  public state?: string;
  public website?: string;
  public category?: string;
  public bar_council_number?: string;
  public status!: 'PENDING' | 'SENT' | 'FAILED' | 'UNSUBSCRIBED';
  public campaign_id?: number | null;
  public import_batch_id?: string;
  public is_opened?: boolean;
  public opened_at?: Date | null;
  public last_sent_at?: Date | null;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

CampaignLawyer.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pincode: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    bar_council_number: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('PENDING', 'SENT', 'FAILED', 'UNSUBSCRIBED'),
      allowNull: false,
      defaultValue: 'PENDING',
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
    import_batch_id: {
      type: DataTypes.STRING(100),
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
    last_sent_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'campaign_lawyers',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        unique: true,
        fields: ['email'],
      },
      {
        fields: ['status'],
      },
      {
        fields: ['campaign_id'],
      },
      {
        fields: ['is_opened'],
      },
      {
        fields: ['import_batch_id'],
      },
      {
        fields: ['city'],
      },
      {
        fields: ['state'],
      },
    ],
  }
);

export default CampaignLawyer;
