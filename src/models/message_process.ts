import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface MessageDeleteAttributes {
  id: number;
  message_id: number;
  user_id: number;
  deleted_at?: Date;
}

interface MessageDeleteCreationAttributes extends Optional<
  MessageDeleteAttributes,
  'id' | 'deleted_at'
> {}

class MessageDelete
  extends Model<MessageDeleteAttributes, MessageDeleteCreationAttributes>
  implements MessageDeleteAttributes
{
  public id!: number;
  public message_id!: number;
  public user_id!: number;
  public deleted_at?: Date;
}

MessageDelete.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'message_deletes',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['message_id', 'user_id'],
      },
    ],
  },
);

interface MessageReplyAttributes {
  id: number;
  parent_message_id: number;
  reply_message_id: number;
  user_id: number;
  replied_at?: Date;
}

interface MessageReplyCreationAttributes extends Optional<
  MessageReplyAttributes,
  'id' | 'replied_at'
> {}

class MessageReply
  extends Model<MessageReplyAttributes, MessageReplyCreationAttributes>
  implements MessageReplyAttributes
{
  public id!: number;
  public parent_message_id!: number;
  public reply_message_id!: number;
  public user_id!: number;
  public replied_at?: Date;
}

MessageReply.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    parent_message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reply_message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    replied_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'message_replies',
    timestamps: false,
    underscored: true,
    indexes: [
      { fields: ['parent_message_id'] },
      { fields: ['reply_message_id'] },
    ],
  },
);

interface MessageStatusAttributes {
  id: number;
  message_id: number;
  user_id: number;
  group_id?: number | null;

  delivered?: boolean;
  delivered_at?: Date | null;

  seen?: boolean;
  seen_at?: Date | null;

  createdAt?: Date;
  updatedAt?: Date;
}

interface MessageStatusCreationAttributes extends Optional<
  MessageStatusAttributes,
  | 'id'
  | 'group_id'
  | 'delivered'
  | 'delivered_at'
  | 'seen'
  | 'seen_at'
  | 'createdAt'
  | 'updatedAt'
> {}

class MessageStatus
  extends Model<MessageStatusAttributes, MessageStatusCreationAttributes>
  implements MessageStatusAttributes
{
  public id!: number;
  public message_id!: number;
  public user_id!: number;
  public group_id?: number | null;

  public delivered?: boolean;
  public delivered_at?: Date | null;

  public seen?: boolean;
  public seen_at?: Date | null;

  public createdAt?: Date;
  public updatedAt?: Date;
}

MessageStatus.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    delivered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    delivered_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    seen: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    seen_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'message_status',
    timestamps: true,
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['message_id', 'user_id'],
      },
      {
        fields: ['user_id', 'delivered'],
      },
      {
        fields: ['user_id', 'seen'],
      },
    ],
  },
);

export { MessageStatus };
export { MessageReply };
export { MessageDelete };
