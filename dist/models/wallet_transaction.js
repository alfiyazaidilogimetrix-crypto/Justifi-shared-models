"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class WalletTransaction extends sequelize_1.Model {
}
WalletTransaction.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id',
        },
        onDelete: 'CASCADE',
    },
    transaction_type: {
        type: sequelize_1.DataTypes.ENUM('CREDIT_REFERRAL', 'DEBIT_PLAN_PURCHASE', 'DEBIT_WITHDRAWAL'),
        allowNull: false,
    },
    amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    balance_after: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    reference_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'wallet_transactions',
    timestamps: true,
    indexes: [
        {
            fields: ['user_id'],
        },
        {
            fields: ['transaction_type'],
        },
    ],
});
exports.default = WalletTransaction;
//# sourceMappingURL=wallet_transaction.js.map