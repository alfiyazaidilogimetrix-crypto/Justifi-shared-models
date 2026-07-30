"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const dc_complex_1 = __importDefault(require("./dc_complex"));
/**
 * DcAdvCase Model
 */
class DcAdvCase extends sequelize_1.Model {
}
DcAdvCase.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cnr: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    date_of_decision: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    case_number: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    filing_number: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    filing_year: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    own_district_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    district_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    advocate_name: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    raw: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
    complex_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    own_complex_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'dc_complex',
            key: 'id',
        },
    },
    state_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    own_state_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    bar_state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    bar_code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    bar_year: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    search_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    lawyer_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'lawyers',
            key: 'id',
        },
    },
    request_id: {
        type: sequelize_1.DataTypes.UUID,
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
    tableName: 'dc_adv_cases',
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['cnr', 'own_complex_id'],
            name: 'uniq_adv_case',
        },
    ],
});
/**
 * Associations
 * One DC Advocate Case belongs to one DC Complex
 */
DcAdvCase.belongsTo(dc_complex_1.default, {
    foreignKey: 'own_complex_id',
    as: 'complex_details',
});
exports.default = DcAdvCase;
//# sourceMappingURL=dc_adv_cases.js.map