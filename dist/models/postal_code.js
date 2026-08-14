"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * Postal Code Model
 */
class PostalCode extends sequelize_1.Model {
}
PostalCode.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    country_code: {
        type: sequelize_1.DataTypes.STRING(2),
        allowNull: true,
    },
    postal_code: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    place_name: {
        type: sequelize_1.DataTypes.STRING(180),
        allowNull: true,
    },
    admin_name1: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    admin_code1: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    admin_name2: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    admin_code2: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    admin_name3: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    admin_code3: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    latitude: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    longitude: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    accuracy: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
}, {
    sequelize: db_1.default,
    tableName: 'postal_codes',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['country_code', 'postal_code', 'place_name'],
        },
    ],
});
exports.default = PostalCode;
//# sourceMappingURL=postal_code.js.map