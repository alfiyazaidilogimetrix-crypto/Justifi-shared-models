"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * CompanyLawyer Model
 */
class CompanyLawyer extends sequelize_1.Model {
}
CompanyLawyer.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    company_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    lawyer_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: 'company_lawyers',
    timestamps: true,
});
exports.default = CompanyLawyer;
//# sourceMappingURL=company_lawyer.js.map