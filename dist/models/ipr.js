"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const IPR_Document = db_1.default.define('ipr_documents', {
    lawyer_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    body_object: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false
    },
    response_text: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    document_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'ipr_documents'
});
exports.default = IPR_Document;
//# sourceMappingURL=ipr.js.map