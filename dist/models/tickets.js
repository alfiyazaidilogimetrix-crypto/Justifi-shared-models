"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Ticket extends sequelize_1.Model {
}
Ticket.init({
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
    query_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        comment: 'FK to Query',
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    is_closed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('open', 'in_progress', 'resolved', 'closed'),
        defaultValue: 'open',
    },
    // 🔥 Messages Array of Objects
    messages: {
        type: sequelize_1.DataTypes.JSON, // PostgreSQL recommended
        allowNull: true,
        defaultValue: [],
    },
    expires_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'tickets',
    timestamps: true,
    underscored: true,
});
exports.default = Ticket;
//# sourceMappingURL=tickets.js.map