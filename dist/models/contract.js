"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Contract extends sequelize_1.Model {
}
Contract.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    parties: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
    },
    value: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('signed', 'under_review', 'draft'),
        allowNull: false,
        defaultValue: 'draft',
    },
    risk_level: {
        type: sequelize_1.DataTypes.ENUM('high', 'medium', 'low'),
        allowNull: false,
        defaultValue: 'medium',
    },
    expiry: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    document_content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    disclaimer: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    language: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    jurisdiction: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    specific_terms: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'contracts',
    timestamps: true,
    underscored: true,
});
exports.default = Contract;
//# sourceMappingURL=contract.js.map