"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class ReferralUsage extends sequelize_1.Model {
}
ReferralUsage.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    referral_code_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'referral_codes',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    referred_user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id',
        },
        onDelete: 'CASCADE',
    },
    referrer_user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id',
        },
        onDelete: 'CASCADE',
    },
    payment_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'payments',
            key: 'id',
        },
        onDelete: 'SET NULL',
    },
    plan_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'plans',
            key: 'id',
        },
    },
    original_amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    discounted_amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    discount_given: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    referrer_benefit_amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('initiated', 'completed', 'failed', 'reversed'),
        allowNull: false,
        defaultValue: 'initiated',
    },
}, {
    sequelize: db_1.default,
    tableName: 'referral_usages',
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['referral_code_id', 'referred_user_id'],
            name: 'unique_user_per_referral',
        },
        {
            fields: ['referred_user_id'],
        },
        {
            fields: ['referrer_user_id'],
        },
        {
            fields: ['payment_id'],
        },
    ],
});
exports.default = ReferralUsage;
//# sourceMappingURL=referral_usage.js.map