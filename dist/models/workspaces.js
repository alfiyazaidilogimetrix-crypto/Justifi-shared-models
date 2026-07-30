"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
class Workspace extends sequelize_1.Model {
}
Workspace.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM('personal', 'team', 'project'),
        defaultValue: 'personal',
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    owner_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'workspaces',
    timestamps: true,
    underscored: true,
});
exports.default = Workspace;
//# sourceMappingURL=workspaces.js.map