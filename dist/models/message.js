"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Message extends sequelize_1.Model {
}
Message.init({
    message_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    query_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    message: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sender_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    receiver_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    group_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    room_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    is_group: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    delivered: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    seen: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    delivered_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    seen_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    is_deleted_for_everyone: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    deleted_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    file_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    slot_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    sent_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: db_1.default,
    tableName: 'messages',
    timestamps: false,
    underscored: true,
});
exports.default = Message;
//# sourceMappingURL=message.js.map