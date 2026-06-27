import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface DateAndTime {
  date: string;
  time: string;
}

export interface SlotAttributes {
  id: number;
  title: string;
  query_id: number;
  isExpire: boolean;
  dateAndTime: DateAndTime[];
  fromUser: number;
  toUser: number;
  consultationStatus?: 'PENDING' | 'BOOKED' | 'SATISFIED' | 'UNSATISFIED' | 'AUTO_SATISFIED';
  totalCallDuration?: number;
  payoutStatus?: 'PENDING' | 'SUCCESS' | 'FAILED';
  created_at?: Date;
  updated_at?: Date;
}

export interface SlotCreationAttributes extends Optional<
  SlotAttributes,
  'id' | 'isExpire' | 'created_at' | 'updated_at' | 'consultationStatus' | 'totalCallDuration' | 'payoutStatus'
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
  public consultationStatus?: 'PENDING' | 'BOOKED' | 'SATISFIED' | 'UNSATISFIED' | 'AUTO_SATISFIED';
  public totalCallDuration?: number;
  public payoutStatus?: 'PENDING' | 'SUCCESS' | 'FAILED';
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
    consultationStatus: {
      type: DataTypes.ENUM('PENDING', 'BOOKED', 'SATISFIED', 'UNSATISFIED', 'AUTO_SATISFIED'),
      allowNull: true,
      defaultValue: 'PENDING',
    },
    totalCallDuration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    payoutStatus: {
      type: DataTypes.ENUM('PENDING', 'SUCCESS', 'FAILED'),
      allowNull: true,
      defaultValue: 'PENDING',
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
