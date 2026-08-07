"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class CallLog extends sequelize_1.Model {
}
CallLog.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    fromUserId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    toUserId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    roomId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    callType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('initiated', 'accepted', 'rejected', 'missed', 'ended'),
        allowNull: false,
    },
    startTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    endTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    durationSeconds: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    slot_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'slots',
            key: 'id',
        },
    },
    call_category: {
        type: sequelize_1.DataTypes.ENUM('CONSULTATION', 'FOLLOW_UP', 'EMERGENCY'),
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'callLog',
    timestamps: true,
    underscored: true,
});
exports.default = CallLog;
//# sourceMappingURL=call_log.js.map