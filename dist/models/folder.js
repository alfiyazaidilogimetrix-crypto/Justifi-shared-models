"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
class Folder extends sequelize_1.Model {
}
Folder.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    workspace_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    parent_folder_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    created_by: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'folders',
    timestamps: true,
    underscored: true,
});
exports.default = Folder;
//# sourceMappingURL=folder.js.map