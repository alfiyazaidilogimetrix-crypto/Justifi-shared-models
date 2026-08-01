import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface PriorityConsultationAttributes {
  id: number;
  user_id: number;
  session_id: string;
  lawyer_ids: number[];
  current_priority_index: number;
  status: 'SEARCHING' | 'ACCEPTED' | 'EXPIRED' | 'CANCELLED';
  accepted_lawyer_id?: number | null;
  created_at?: Date;
  updated_at?: Date;
}

export interface PriorityConsultationCreationAttributes extends Optional<PriorityConsultationAttributes, 'id' | 'current_priority_index' | 'status' | 'accepted_lawyer_id' | 'created_at' | 'updated_at'> {}

class PriorityConsultation extends Model<PriorityConsultationAttributes, PriorityConsultationCreationAttributes> implements PriorityConsultationAttributes {
  public id!: number;
  public user_id!: number;
  public session_id!: string;
  public lawyer_ids!: number[];
  public current_priority_index!: number;
  public status!: 'SEARCHING' | 'ACCEPTED' | 'EXPIRED' | 'CANCELLED';
  public accepted_lawyer_id!: number | null;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

PriorityConsultation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    session_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    lawyer_ids: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
      comment: 'Array of lawyer IDs in priority order'
    },
    current_priority_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM('SEARCHING', 'ACCEPTED', 'EXPIRED', 'CANCELLED'),
      allowNull: false,
      defaultValue: 'SEARCHING',
    },
    accepted_lawyer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'priority_consultations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default PriorityConsultation;
