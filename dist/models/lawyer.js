"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * Lawyer Model
 */
class Lawyer extends sequelize_1.Model {
}
Lawyer.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    lawyer_name: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    licence_no: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    ratings: { type: sequelize_1.DataTypes.DECIMAL, allowNull: true },
    cases_win: { type: sequelize_1.DataTypes.INTEGER, allowNull: true },
    contact_no: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    judiciary_courts: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    age: { type: sequelize_1.DataTypes.INTEGER, allowNull: true },
    email_id: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    bar_council_reg_no: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    bar_council_certificate: { type: sequelize_1.DataTypes.INTEGER, allowNull: true },
    state_council_reg_no: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    state_council_certificate: { type: sequelize_1.DataTypes.INTEGER, allowNull: true },
    certificate_for_practice: { type: sequelize_1.DataTypes.INTEGER, allowNull: true },
    areas_of_expertise: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.INTEGER),
        allowNull: true,
    },
    legal_undertaking: { type: sequelize_1.DataTypes.INTEGER, allowNull: true },
    pan_number: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    aadhar_number: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    bank_account_number: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    ifsc_code: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    upi_id: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    documents_uploaded: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    pan_verified: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    aadhar_verified: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    is_verified: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    district_data_id: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT),
        allowNull: true,
    },
    state_id: { type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT), allowNull: true },
    languages_known: { type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT), allowNull: true },
    court_type: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    international_litigation_experience: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    plan: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    mobile_no: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    dob: { type: sequelize_1.DataTypes.DATEONLY, allowNull: true },
    address: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    pincode: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    city: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    state: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    address_line1: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    address_line2: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    landmark: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    alternate_mobile_no: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    digital_pin: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    user_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    Qualification: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    experience: { type: sequelize_1.DataTypes.STRING, allowNull: true },
}, {
    sequelize: db_1.default,
    tableName: 'lawyers',
    timestamps: true,
});
exports.default = Lawyer;
//# sourceMappingURL=lawyer.js.map