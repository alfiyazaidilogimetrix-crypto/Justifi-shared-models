import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface CallLogAttributes {
  id: number;
  fromUserId: number;
  toUserId: number;
  roomId: string;
  callType: string;
  status: 'initiated' | 'accepted' | 'rejected' | 'missed' | 'ended';
  startTime?: Date | null | undefined;
  endTime?: Date | null | undefined;
  durationSeconds?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CallLogCreationAttributes extends Optional<
  CallLogAttributes,
  'id' | 'createdAt' | 'updatedAt'
> {}

class CallLog
  extends Model<CallLogAttributes, CallLogCreationAttributes>
  implements CallLogAttributes
{
  public id!: number;
  public fromUserId!: number;
  public toUserId!: number;
  public roomId!: string;
  public callType!: string;
  public status!: 'initiated' | 'accepted' | 'rejected' | 'missed' | 'ended';
  public startTime?: Date;
  public endTime?: Date;
  public durationSeconds?: number;
  public createdAt?: Date;
  public updatedAt?: Date;
}

CallLog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fromUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    toUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    roomId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    callType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        'initiated',
        'accepted',
        'rejected',
        'missed',
        'ended',
      ),
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    durationSeconds: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'callLog',
    timestamps: true,
    underscored: true,
  },
);

export default CallLog;
