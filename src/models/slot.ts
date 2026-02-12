import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface DateAndTime {
  date: string;
  time: string;
}

interface SlotAttributes {
  id: number;
  title: string;
  query_id: number;
  isExpire: boolean;
  dateAndTime: DateAndTime[];
  fromUser: number;
  toUser: number;
  created_at?: Date;
  updated_at?: Date;
}

interface SlotCreationAttributes extends Optional<
  SlotAttributes,
  'id' | 'isExpire' | 'created_at' | 'updated_at'
> {}

class Slot
  extends Model<SlotAttributes, SlotCreationAttributes>
  implements SlotAttributes
{
  public id!: number;
  public title!: string;
  public query_id!: number;
  public isExpire!: boolean;
  public dateAndTime!: DateAndTime[];
  public fromUser!: number;
  public toUser!: number;
  public created_at?: Date;
  public updated_at?: Date;
}

Slot.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    query_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isExpire: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    dateAndTime: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    fromUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    toUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'slots',
    timestamps: true,
    underscored: true,
  },
);

export default Slot;
