"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
class WorkspaceMember extends sequelize_1.Model {
}
WorkspaceMember.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    workspace_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.ENUM('admin', 'editor', 'viewer'),
        allowNull: false,
        defaultValue: 'viewer',
    },
}, {
    sequelize: db_1.default,
    tableName: 'workspace_members',
    timestamps: true,
    underscored: true,
});
exports.default = WorkspaceMember;
//# sourceMappingURL=team_member.js.map