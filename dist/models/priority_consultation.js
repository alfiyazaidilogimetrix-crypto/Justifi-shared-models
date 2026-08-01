"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class PriorityConsultation extends sequelize_1.Model {
}
PriorityConsultation.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    session_id: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    lawyer_ids: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
        comment: 'Array of lawyer IDs in priority order'
    },
    current_priority_index: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('SEARCHING', 'ACCEPTED', 'EXPIRED', 'CANCELLED'),
        allowNull: false,
        defaultValue: 'SEARCHING',
    },
    accepted_lawyer_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'priority_consultations',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
exports.default = PriorityConsultation;
//# sourceMappingURL=priority_consultation.js.map