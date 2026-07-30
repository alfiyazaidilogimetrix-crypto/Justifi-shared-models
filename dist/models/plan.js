"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Plan extends sequelize_1.Model {
}
Plan.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    plan_type: {
        type: sequelize_1.DataTypes.ENUM('CALLING', 'EMERGENCY', 'LAWYER_MONTHLY', 'LAWYER_YEARLY', 'LAWYER_TRIAL', 'RYLAW_BOT', 'ENTERPRISE_PLAN'),
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'INR',
    },
    duration: {
        type: sequelize_1.DataTypes.ENUM('monthly', 'yearly', 'quaterly', 'daily', 'weekly', 'lifetime'),
        allowNull: false,
        defaultValue: 'monthly',
    },
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    is_recommended: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    features: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'plans',
    timestamps: true,
    underscored: true,
});
exports.default = Plan;
//# sourceMappingURL=plan.js.map