"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Complaint extends sequelize_1.Model {
}
Complaint.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    raised_by: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    against_user: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('pending', 'in_progress', 'resolved', 'rejected'),
        defaultValue: 'pending',
    },
    admin_remark: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'complaints',
    timestamps: true,
    underscored: true,
});
exports.default = Complaint;
//# sourceMappingURL=complain.js.map