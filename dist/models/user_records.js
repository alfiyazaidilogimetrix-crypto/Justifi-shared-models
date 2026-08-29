"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class UserRecord extends sequelize_1.Model {
}
UserRecord.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'users',
            key: 'user_id',
        },
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
    },
    time: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('ACTIVE', 'EXPIRE', 'PENDING', 'SUSPENDED'),
        allowNull: false,
        defaultValue: 'ACTIVE',
    },
    is_recharge: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    is_package: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    emergency_plan_used: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    package_validity: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    plan_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    total_minutes: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    bonus_minutes: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    used_minutes: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    remaining_minutes: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    valid_from: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    valid_till: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    duration_type: {
        type: sequelize_1.DataTypes.ENUM('MINUTES', 'MONTHLY', 'YEARLY'),
    },
    payment_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    payment_status: {
        type: sequelize_1.DataTypes.ENUM('SUCCESS', 'FAILED', 'PENDING'),
        defaultValue: 'PENDING',
    },
    is_trial_buy: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    plan_purchased_count: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    }
}, {
    sequelize: db_1.default,
    tableName: 'user_record',
    timestamps: true,
    underscored: true,
});
exports.default = UserRecord;
//# sourceMappingURL=user_records.js.map