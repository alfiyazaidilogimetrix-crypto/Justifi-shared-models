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
  slot_id?: number;
  call_category?: 'CONSULTATION' | 'FOLLOW_UP' | 'EMERGENCY';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CallLogCreationAttributes extends Optional<
  CallLogAttributes,
  'id' | 'createdAt' | 'updatedAt' | 'slot_id' | 'call_category'
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
  public slot_id?: number;
  public call_category?: 'CONSULTATION' | 'FOLLOW_UP' | 'EMERGENCY';
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
    slot_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'slots',
        key: 'id',
      },
    },
    call_category: {
      type: DataTypes.ENUM('CONSULTATION', 'FOLLOW_UP', 'EMERGENCY'),
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
