"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Campaign extends sequelize_1.Model {
}
Campaign.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    start_date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    end_date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    daily_limit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 500,
    },
    daily_trigger_time: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
        defaultValue: '10:00',
    },
    total_target: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    total_sent: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('SCHEDULED', 'ACTIVE', 'PAUSED', 'COMPLETED'),
        allowNull: false,
        defaultValue: 'SCHEDULED',
    },
    last_automated_run_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'campaigns',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            fields: ['status'],
        },
        {
            fields: ['start_date'],
        },
        {
            fields: ['end_date'],
        },
    ],
});
exports.default = Campaign;
//# sourceMappingURL=campaign.js.map