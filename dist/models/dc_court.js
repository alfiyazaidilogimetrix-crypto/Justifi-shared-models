"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * DcCourt Model
 */
class DcCourt extends sequelize_1.Model {
}
DcCourt.init({
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
    d_court_id: {
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
    own_complex_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'dc_complex',
            key: 'id',
        },
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
    tableName: 'dc_court',
    timestamps: true,
});
exports.default = DcCourt;
//# sourceMappingURL=dc_court.js.map