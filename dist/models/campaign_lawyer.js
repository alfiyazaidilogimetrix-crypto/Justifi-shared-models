"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class CampaignLawyer extends sequelize_1.Model {
}
CampaignLawyer.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    company: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    mobile: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    address: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    pincode: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    city: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    state: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    website: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    category: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: true,
    },
    bar_council_number: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('PENDING', 'SENT', 'FAILED', 'UNSUBSCRIBED'),
        allowNull: false,
        defaultValue: 'PENDING',
    },
    campaign_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: true,
        references: {
            model: 'campaigns',
            key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    },
    import_batch_id: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    is_opened: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    opened_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    last_sent_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'campaign_lawyers',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            unique: true,
            fields: ['email'],
        },
        {
            fields: ['status'],
        },
        {
            fields: ['campaign_id'],
        },
        {
            fields: ['is_opened'],
        },
        {
            fields: ['import_batch_id'],
        },
        {
            fields: ['city'],
        },
        {
            fields: ['state'],
        },
    ],
});
exports.default = CampaignLawyer;
//# sourceMappingURL=campaign_lawyer.js.map