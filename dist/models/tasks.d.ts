import { Model, Optional } from 'sequelize';
/**
 * Allowed task priorities
 */
export declare enum TaskPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
}
/**
 * Allowed task statuses
 */
export declare enum TaskStatus {
    PENDING = "pending",
    INPROGRESS = "inprogress",
    COMPLETED = "completed",
    ONHOLD = "onhold",
    CANCELED = "canceled"
}
/**
 * Task table attributes
 */
interface TaskAttributes {
    id: number;
    user_id: number;
    created_by: number;
    title: string;
    description?: string;
    case_no?: string;
    priority?: TaskPriority;
    task_type?: string;
    status?: TaskStatus;
    due_date?: Date;
}
/**
 * Attributes allowed during creation
 */
interface TaskCreationAttributes extends Optional<TaskAttributes, 'id' | 'description' | 'case_no' | 'priority' | 'task_type' | 'status' | 'due_date'> {
}
/**
 * Task Model
 */
declare class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
    id: number;
    user_id: number;
    created_by: number;
    title: string;
    description?: string;
    case_no?: string;
    priority?: TaskPriority;
    task_type?: string;
    status?: TaskStatus;
    due_date?: Date;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default Task;
//# sourceMappingURL=tasks.d.ts.map