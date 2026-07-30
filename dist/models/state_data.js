"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * State Model
 */
class StateData extends sequelize_1.Model {
}
StateData.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    state_id: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
        unique: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'state_data',
    timestamps: true,
});
exports.default = StateData;
//# sourceMappingURL=state_data.js.map