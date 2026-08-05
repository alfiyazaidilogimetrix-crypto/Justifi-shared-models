import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface LawyerAvailabilityAttributes {
  id: number;
  lawyerId: number;

  availability: {
    day:
      | 'MONDAY'
      | 'TUESDAY'
      | 'WEDNESDAY'
      | 'THURSDAY'
      | 'FRIDAY'
      | 'SATURDAY'
      | 'SUNDAY';

    startTime: string;
    endTime: string;

    skipHours?: number;

    description?: string;

    isAvailable: boolean;

    breaks?: {
      startTime: string;
      endTime: string;
      description?: string;
    }[];
  }[];

  lastLoginAt?: Date | null;
  nextLoginAt?: Date | null;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface LawyerAvailabilityCreationAttributes
  extends Optional<
    LawyerAvailabilityAttributes,
    'id' | 'lastLoginAt' | 'nextLoginAt' | 'createdAt' | 'updatedAt'
  > {}

class LawyerAvailability
  extends Model<
    LawyerAvailabilityAttributes,
    LawyerAvailabilityCreationAttributes
  >
  implements LawyerAvailabilityAttributes
{
  public id!: number;
  public lawyerId!: number;

  public availability!: {
    day:
      | 'MONDAY'
      | 'TUESDAY'
      | 'WEDNESDAY'
      | 'THURSDAY'
      | 'FRIDAY'
      | 'SATURDAY'
      | 'SUNDAY';
    startTime: string;
    endTime: string;
    skipHours?: number;
    description?: string;
    isAvailable: boolean;
    breaks?: {
      startTime: string;
      endTime: string;
      description?: string;
    }[];
  }[];

  public lastLoginAt?: Date;
  public nextLoginAt?: Date;

  public createdAt?: Date;
  public updatedAt?: Date;
}

LawyerAvailability.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    lawyerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'lawyers',
        key: 'id',
      },
    },

    availability: {
      type: DataTypes.JSON, // MySQL me DataTypes.JSON use karna
      allowNull: false,
    },

    lastLoginAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    nextLoginAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'lawyer_availability',
    timestamps: true,
    underscored: true,
  },
);

export default LawyerAvailability;