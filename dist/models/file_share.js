"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
class FileShare extends sequelize_1.Model {
}
FileShare.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    file_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    shared_by: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    shared_with: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    access_type: {
        type: sequelize_1.DataTypes.ENUM('view', 'download', 'edit'),
        allowNull: false,
    },
    expires_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'file_shares',
    timestamps: true,
    underscored: true,
});
exports.default = FileShare;
//# sourceMappingURL=file_share.js.map