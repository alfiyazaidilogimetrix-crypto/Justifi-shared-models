"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class CampaignSendLog extends sequelize_1.Model {
}
CampaignSendLog.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
    lawyer_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: true,
        references: {
            model: 'campaign_lawyers',
            key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('SENT', 'FAILED'),
        allowNull: false,
    },
    message_id: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    error_message: {
        type: sequelize_1.DataTypes.TEXT,
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
    open_count: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    delivery_status: {
        type: sequelize_1.DataTypes.ENUM('PENDING', 'DELIVERED', 'BOUNCED', 'COMPLAINT'),
        allowNull: true,
        defaultValue: 'PENDING',
    },
    bounce_type: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    sent_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: db_1.default,
    tableName: 'campaign_send_logs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
        {
            fields: ['campaign_id'],
        },
        {
            fields: ['email'],
        },
        {
            fields: ['status'],
        },
        {
            fields: ['is_opened'],
        },
        {
            fields: ['delivery_status'],
        },
        {
            fields: ['sent_at'],
        },
    ],
});
exports.default = CampaignSendLog;
//# sourceMappingURL=campaign_send_log.js.map