"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class PayoutRequest extends sequelize_1.Model {
}
PayoutRequest.init({
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
    amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    account_holder_name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    bank_account_number: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    ifsc_code: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('PENDING', 'PROCESSED', 'REJECTED'),
        allowNull: false,
        defaultValue: 'PENDING',
    },
    utr_number: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    processed_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'payout_requests',
    timestamps: true,
    indexes: [
        {
            fields: ['user_id'],
        },
        {
            fields: ['status'],
        },
    ],
});
exports.default = PayoutRequest;
//# sourceMappingURL=payout_request.js.map