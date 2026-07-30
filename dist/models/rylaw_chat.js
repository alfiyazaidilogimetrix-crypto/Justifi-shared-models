"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class RylawChat extends sequelize_1.Model {
}
RylawChat.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    chat_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    query: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    response: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    severity: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    file_summary: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    file_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'rylaw_chat',
    timestamps: false,
    underscored: true,
});
exports.default = RylawChat;
//# sourceMappingURL=rylaw_chat.js.map