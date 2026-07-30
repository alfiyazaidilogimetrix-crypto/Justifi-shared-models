"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
class ConsultationFeedback extends sequelize_1.Model {
}
ConsultationFeedback.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        comment: 'User who submitted feedback',
    },
    lawyer_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        comment: 'Lawyer who conducted consultation',
    },
    overall_rating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
        comment: 'Overall consultation rating (1-5)',
    },
    consultation_quality: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 5,
        },
        comment: 'Quality of legal consultation',
    },
    lawyer_professionalism: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 5,
        },
        comment: 'Lawyer professionalism rating',
    },
    response_time_rating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 5,
        },
        comment: 'Response time rating',
    },
    issue_resolved: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        comment: 'Whether the user issue was resolved',
    },
    would_recommend: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        comment: 'Would recommend this lawyer',
    },
    feedback: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
        comment: 'Detailed feedback from user',
    },
    suggestions: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
        comment: 'Suggestions for improvement',
    },
}, {
    sequelize: db_1.default,
    tableName: 'consultation_feedbacks',
    timestamps: true,
    underscored: true,
});
exports.default = ConsultationFeedback;
//# sourceMappingURL=consultation_feedback.js.map