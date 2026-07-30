"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = exports.TaskPriority = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * Allowed task priorities
 */
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["LOW"] = "low";
    TaskPriority["MEDIUM"] = "medium";
    TaskPriority["HIGH"] = "high";
})(TaskPriority || (exports.TaskPriority = TaskPriority = {}));
/**
 * Allowed task statuses
 */
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["PENDING"] = "pending";
    TaskStatus["INPROGRESS"] = "inprogress";
    TaskStatus["COMPLETED"] = "completed";
    TaskStatus["ONHOLD"] = "onhold";
    TaskStatus["CANCELED"] = "canceled";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
/**
 * Task Model
 */
class Task extends sequelize_1.Model {
}
Task.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    created_by: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    case_no: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    priority: {
        type: sequelize_1.DataTypes.ENUM(...Object.values(TaskPriority)),
        allowNull: true,
    },
    task_type: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM(...Object.values(TaskStatus)),
        allowNull: false,
        defaultValue: TaskStatus.PENDING,
    },
    due_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'tasks',
    timestamps: true,
});
exports.default = Task;
//# sourceMappingURL=tasks.js.map