"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyType = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * Allowed company types
 */
var CompanyType;
(function (CompanyType) {
    CompanyType["PRIVATE_LIMITED"] = "Private Limited";
    CompanyType["PUBLIC_LIMITED"] = "Public Limited";
    CompanyType["LLP"] = "LLP";
    CompanyType["LLC"] = "LLC";
    CompanyType["OPC"] = "OPC";
    CompanyType["PARTNERSHIP"] = "Partnership";
    CompanyType["PROPRIETORSHIP"] = "Proprietorship";
})(CompanyType || (exports.CompanyType = CompanyType = {}));
/**
 * Company Model
 */
class CompanyRegistration extends sequelize_1.Model {
}
CompanyRegistration.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    company_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    company_type: {
        type: sequelize_1.DataTypes.ENUM(...Object.values(CompanyType)),
        allowNull: false,
    },
    registration_number: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    pan_number: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    gst_number: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    incorporation_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    registered_address: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    district_data_id: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT),
        allowNull: true,
    },
    state_id: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT),
        allowNull: true,
    },
    contact_email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    contact_phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    is_claimed_itc: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'company',
    timestamps: true,
    underscored: true,
});
exports.default = CompanyRegistration;
//# sourceMappingURL=company.js.map