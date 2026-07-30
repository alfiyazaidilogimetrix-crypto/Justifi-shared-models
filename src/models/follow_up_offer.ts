import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface FollowUpOfferAttributes {
  id: number;
  slot_id: number;
  reason?: string;
  time: Date;
  expiry: Date;
  is_used: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface FollowUpOfferCreationAttributes extends Optional<
  FollowUpOfferAttributes,
  'id' | 'is_used' | 'created_at' | 'updated_at'
> {}

class FollowUpOffer
  extends Model<FollowUpOfferAttributes, FollowUpOfferCreationAttributes>
  implements FollowUpOfferAttributes
{
  public id!: number;
  public slot_id!: number;
  public reason?: string;
  public time!: Date;
  public expiry!: Date;
  public is_used!: boolean;
  public created_at?: Date;
  public updated_at?: Date;
}

FollowUpOffer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    slot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expiry: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    is_used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'follow_up_offers',
    timestamps: true,
    underscored: true,
  },
);

export default FollowUpOffer;
