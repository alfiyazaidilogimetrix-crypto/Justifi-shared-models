import sequelize from '../config/db';
import { DataTypes, Model, Optional } from 'sequelize';

// Export interfaces
export interface ConsultationFeedbackAttributes {
  id: number;
  user_id: number;
  lawyer_id: number;

  overall_rating: number;
  consultation_quality?: number;
  lawyer_professionalism?: number;
  response_time_rating?: number;

  issue_resolved?: boolean;
  would_recommend?: boolean;

  feedback?: string;
  suggestions?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface ConsultationFeedbackCreationAttributes
  extends Optional<
    ConsultationFeedbackAttributes,
    'id' | 'createdAt' | 'updatedAt'
  > {}

class ConsultationFeedback
  extends Model<
    ConsultationFeedbackAttributes,
    ConsultationFeedbackCreationAttributes
  >
  implements ConsultationFeedbackAttributes
{
  public id!: number;
  public user_id!: number;
  public lawyer_id!: number;

  public overall_rating!: number;
  public consultation_quality?: number;
  public lawyer_professionalism?: number;
  public response_time_rating?: number;

  public issue_resolved?: boolean;
  public would_recommend?: boolean;

  public feedback?: string;
  public suggestions?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ConsultationFeedback.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'User who submitted feedback',
    },

    lawyer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Lawyer who conducted consultation',
    },

    overall_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
      comment: 'Overall consultation rating (1-5)',
    },

    consultation_quality: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5,
      },
      comment: 'Quality of legal consultation',
    },

    lawyer_professionalism: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5,
      },
      comment: 'Lawyer professionalism rating',
    },

    response_time_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5,
      },
      comment: 'Response time rating',
    },

    issue_resolved: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: 'Whether the user issue was resolved',
    },

    would_recommend: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: 'Would recommend this lawyer',
    },

    feedback: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Detailed feedback from user',
    },

    suggestions: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Suggestions for improvement',
    },
  },
  {
    sequelize,
    tableName: 'consultation_feedbacks',
    timestamps: true,
    underscored: true,
  },
);

export default ConsultationFeedback;