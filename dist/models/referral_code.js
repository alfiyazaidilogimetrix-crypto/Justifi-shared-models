"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class ReferralCode extends sequelize_1.Model {
}
ReferralCode.init({
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
    code: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    state_code: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    city_code: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    discount_percentage: {
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 20.00,
    },
    referrer_benefit_percentage: {
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 10.00,
    },
    valid_until: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    has_seen_welcome_modal: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'referral_codes',
    timestamps: true,
    indexes: [
        {
            fields: ['code'],
            unique: true,
        },
        {
            fields: ['state_code', 'city_code'],
        },
        {
            fields: ['user_id'],
        },
    ],
});
exports.default = ReferralCode;
//# sourceMappingURL=referral_code.js.map