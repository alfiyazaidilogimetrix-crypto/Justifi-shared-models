"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Notification extends sequelize_1.Model {
}
Notification.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    from_user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    to_user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM('GENERAL', 'SYSTEM', 'PAYMENT', 'BOOKING', 'CHAT', 'ORDER', 'REMINDER', 'PROMOTIONAL'),
        allowNull: false,
        defaultValue: 'GENERAL',
    },
    reference_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    reference_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    data: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
    is_read: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'notifications',
    timestamps: true,
    underscored: true,
});
exports.default = Notification;
//# sourceMappingURL=notification.js.map