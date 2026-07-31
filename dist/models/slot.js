"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Slot extends sequelize_1.Model {
}
Slot.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    query_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    isExpire: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    dateAndTime: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    fromUser: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    toUser: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    consultationStatus: {
        type: sequelize_1.DataTypes.ENUM('PENDING', 'BOOKED', 'RESCHEDULED', 'SATISFIED', 'UNSATISFIED', 'AUTO_SATISFIED', 'ACCEPTED', 'REJECTED'),
        allowNull: true,
        defaultValue: 'PENDING',
    },
    totalCallDuration: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    payoutStatus: {
        type: sequelize_1.DataTypes.ENUM('PENDING', 'SUCCESS', 'FAILED'),
        allowNull: true,
        defaultValue: 'PENDING',
    },
    follow_up_enabled: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    is_used: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'slots',
    timestamps: true,
    underscored: true,
});
exports.default = Slot;
//# sourceMappingURL=slot.js.map