"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
/**
 * UserDetails Model
 */
class UserDetails extends sequelize_1.Model {
}
UserDetails.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    contact_no: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    pincode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    landmark: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    alternate_mobile_no: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'user_details',
    timestamps: true,
});
exports.default = UserDetails;
//# sourceMappingURL=user_details.js.map