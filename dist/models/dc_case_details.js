"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * DcCaseDetail Model
 */
class DcCaseDetail extends sequelize_1.Model {
}
DcCaseDetail.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cnr: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    actsAndSections: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
    details: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
    firstInformationReport: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
    history: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
    orders: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
    parties: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
    case_status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    adv_cases_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'dc_adv_cases',
            key: 'id',
        },
    },
    raw: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: db_1.default,
    tableName: 'dc_case_details',
    timestamps: true,
});
exports.default = DcCaseDetail;
//# sourceMappingURL=dc_case_details.js.map