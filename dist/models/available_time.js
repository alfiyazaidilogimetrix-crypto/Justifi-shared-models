"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class LawyerAvailability extends sequelize_1.Model {
}
LawyerAvailability.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    lawyerId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'lawyers',
            key: 'id',
        },
    },
    availability: {
        type: sequelize_1.DataTypes.JSON, // MySQL me DataTypes.JSON use karna
        allowNull: false,
    },
    lastLoginAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    nextLoginAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'lawyer_availability',
    timestamps: true,
    underscored: true,
});
exports.default = LawyerAvailability;
//# sourceMappingURL=available_time.js.map