import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

/**
 * Allowed task priorities
 */
export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

/**
 * Task table attributes
 */
interface TaskAttributes {
  id: number;
  user_id: number;
  title: string;
  description?: string;
  case_no?: string;
  priority?: TaskPriority;
}

/**
 * Attributes allowed during creation
 */
interface TaskCreationAttributes extends Optional<
  TaskAttributes,
  'id' | 'description' | 'case_no' | 'priority'
> {}

/**
 * Task Model
 */
class Task
  extends Model<TaskAttributes, TaskCreationAttributes>
  implements TaskAttributes
{
  public id!: number;
  public user_id!: number;
  public title!: string;
  public description?: string;
  public case_no?: string;
  public priority?: TaskPriority;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    case_no: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    priority: {
      type: DataTypes.ENUM(...Object.values(TaskPriority)),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'tasks',
    timestamps: true,
  },
);

export default Task;
