import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface ChatGroupAttributes {
  id: number;
  group_name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ChatGroupCreationAttributes extends Optional<
  ChatGroupAttributes,
  'id' | 'createdAt' | 'updatedAt'
> {}

class ChatGroup
  extends Model<ChatGroupAttributes, ChatGroupCreationAttributes>
  implements ChatGroupAttributes
{
  public id!: number;
  public group_name!: string;

  public createdAt?: Date;
  public updatedAt?: Date;
}

ChatGroup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'chat_groups',
    timestamps: true,
    underscored: true,
  },
);

export default ChatGroup;
