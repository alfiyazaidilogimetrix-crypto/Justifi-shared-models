"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Payment extends sequelize_1.Model {
}
Payment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    plan_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'plans',
            key: 'id',
        },
    },
    amount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'INR',
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('paid', 'created', 'cancelled', 'failed'),
        allowNull: true,
        defaultValue: 'created',
    },
    payment_method: {
        type: sequelize_1.DataTypes.ENUM("Prepaid", "COD", "Wallet"),
        allowNull: true,
        defaultValue: "Prepaid"
    },
    payment_properties: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'payments',
    timestamps: true,
    underscored: true,
});
exports.default = Payment;
//# sourceMappingURL=payment.js.map