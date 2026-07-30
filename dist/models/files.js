"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
class File extends sequelize_1.Model {
}
File.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    filename: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: 'Generated filename for storage',
    },
    original_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: 'Original filename from user',
    },
    mime_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: 'MIME type of the file',
    },
    size: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        comment: 'File size in bytes',
        validate: {
            min: 0,
        },
    },
    folder_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    file_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    folder_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    workspace_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    owner_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'files',
    timestamps: true,
    underscored: true,
});
exports.default = File;
//# sourceMappingURL=files.js.map