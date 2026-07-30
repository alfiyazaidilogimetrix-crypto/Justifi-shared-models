"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDelete = exports.MessageReply = exports.MessageStatus = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class MessageDelete extends sequelize_1.Model {
}
exports.MessageDelete = MessageDelete;
MessageDelete.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    message_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    deleted_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: db_1.default,
    tableName: 'message_deletes',
    timestamps: false,
    underscored: true,
    indexes: [
        {
            unique: true,
            fields: ['message_id', 'user_id'],
        },
    ],
});
class MessageReply extends sequelize_1.Model {
}
exports.MessageReply = MessageReply;
MessageReply.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    parent_message_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    reply_message_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    replied_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: db_1.default,
    tableName: 'message_replies',
    timestamps: false,
    underscored: true,
    indexes: [
        { fields: ['parent_message_id'] },
        { fields: ['reply_message_id'] },
    ],
});
class MessageStatus extends sequelize_1.Model {
}
exports.MessageStatus = MessageStatus;
MessageStatus.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    message_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    group_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    delivered: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    delivered_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    seen: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    seen_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'message_status',
    timestamps: true,
    underscored: true,
    indexes: [
        {
            unique: true,
            fields: ['message_id', 'user_id'],
        },
        {
            fields: ['user_id', 'delivered'],
        },
        {
            fields: ['user_id', 'seen'],
        },
    ],
});
//# sourceMappingURL=message_process.js.map