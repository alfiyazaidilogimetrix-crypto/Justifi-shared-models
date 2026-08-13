"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * User Model
 */
class User extends sequelize_1.Model {
}
User.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    encrypted_password: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    master_password: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    user_type: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    plan_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    parent_user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    firm_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    subscription_status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    subscription_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    googleId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    district_data_id: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT),
        allowNull: true,
    },
    state_id: { type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT), allowNull: true },
    is_blocked: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
    block_reason: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    blocked_at: { type: sequelize_1.DataTypes.DATE, allowNull: true },
    city: { type: sequelize_1.DataTypes.STRING(255), allowNull: true },
    state: { type: sequelize_1.DataTypes.STRING(255), allowNull: true },
    preferred_language: { type: sequelize_1.DataTypes.STRING(255), allowNull: true },
    latitude: { type: sequelize_1.DataTypes.DOUBLE, allowNull: true, defaultValue: null },
    longitude: { type: sequelize_1.DataTypes.DOUBLE, allowNull: true, defaultValue: null },
}, {
    sequelize: db_1.default,
    tableName: 'users',
    timestamps: false, // matches original JS model
});
exports.default = User;
//# sourceMappingURL=user.js.map