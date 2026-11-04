import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface EmailSuppressionAttributes {
  id: number;
  email: string;
  reason: 'UNSUBSCRIBE' | 'BOUNCE' | 'COMPLAINT' | 'MANUAL';
  unsubscribed_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface EmailSuppressionCreationAttributes
  extends Optional<
    EmailSuppressionAttributes,
    'id' | 'reason' | 'unsubscribed_at' | 'created_at' | 'updated_at'
  > {}

class EmailSuppression
  extends Model<EmailSuppressionAttributes, EmailSuppressionCreationAttributes>
  implements EmailSuppressionAttributes
{
  public id!: number;
  public email!: string;
  public reason!: 'UNSUBSCRIBE' | 'BOUNCE' | 'COMPLAINT' | 'MANUAL';
  public unsubscribed_at?: Date;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

EmailSuppression.init(
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
    reason: {
      type: DataTypes.ENUM('UNSUBSCRIBE', 'BOUNCE', 'COMPLAINT', 'MANUAL'),
      allowNull: false,
      defaultValue: 'UNSUBSCRIBE',
    },
    unsubscribed_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'email_suppression_list',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        unique: true,
        fields: ['email'],
      },
    ],
  }
);

export default EmailSuppression;
