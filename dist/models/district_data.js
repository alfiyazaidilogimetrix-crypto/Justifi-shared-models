"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * District Model
 */
class District extends sequelize_1.Model {
}
District.init({
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
    district_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    state_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    own_state_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'district_data',
    timestamps: true,
});
exports.default = District;
//# sourceMappingURL=district_data.js.map