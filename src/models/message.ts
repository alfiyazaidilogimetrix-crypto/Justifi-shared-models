import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface MessageAttributes {
  message_id: number;
  query_id?: number | null;
  message?: string;
  type: string; // text | image | video | file
  sender_id: number;
  receiver_id?: number | null;
  group_id?: number | null;
  room_id?: string | null;
  is_group?: boolean;
  delivered?: boolean;
  seen?: boolean;

  delivered_at?: Date | null;
  seen_at?: Date | null;

  is_deleted_for_everyone?: boolean;
  deleted_at?: Date | null;

  file_id?: number | null;
  slot_id?: number | null;
  sent_at?: Date;

  createdAt?: Date;
  updatedAt?: Date;

  file?: any;
  slot?: any;
}

export interface MessageCreationAttributes extends Optional<
  MessageAttributes,
  | 'message_id'
  | 'receiver_id'
  | 'group_id'
  | 'room_id'
  | 'is_group'
  | 'delivered'
  | 'seen'
  | 'delivered_at'
  | 'seen_at'
  | 'is_deleted_for_everyone'
  | 'deleted_at'
  | 'file_id'
  | 'slot_id'
  | 'sent_at'
  | 'createdAt'
  | 'updatedAt'
> {}

class Message
  extends Model<MessageAttributes, MessageCreationAttributes>
  implements MessageAttributes
{
  public message_id!: number;
  public query_id?: number | null;
  public message?: string;
  public type!: string;
  public sender_id!: number;
  public receiver_id?: number | null;
  public group_id?: number | null;
  public room_id?: string | null;
  public is_group?: boolean;
  public delivered?: boolean;
  public seen?: boolean;

  public delivered_at?: Date | null;
  public seen_at?: Date | null;

  public is_deleted_for_everyone?: boolean;
  public deleted_at?: Date | null;

  public file_id?: number | null;
  public slot_id?: number | null;
  public sent_at?: Date;

  public createdAt?: Date;
  public updatedAt?: Date;

  public readonly file?: any;
  public readonly slot?: any;
}

Message.init(
  {
    message_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    query_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receiver_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    room_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_group: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    delivered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    seen: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    delivered_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    seen_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_deleted_for_everyone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    file_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    slot_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sent_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'messages',
    timestamps: false,
    underscored: true,
  },
);

export default Message;
