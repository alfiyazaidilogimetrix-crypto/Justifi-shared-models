"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * DcComplex Model
 */
class DcComplex extends sequelize_1.Model {
}
DcComplex.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    complex_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    state_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    district_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    own_state_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'state_data',
            key: 'id',
        },
    },
    own_district_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'district_data',
            key: 'id',
        },
    },
    est_code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    source: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: 'ecourts',
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
    tableName: 'dc_complex',
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['complex_id', 'own_district_id'],
            name: 'uniq_complex_per_district',
        },
    ],
});
exports.default = DcComplex;
//# sourceMappingURL=dc_complex.js.map