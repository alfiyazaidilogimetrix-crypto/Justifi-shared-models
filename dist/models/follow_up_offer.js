"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class FollowUpOffer extends sequelize_1.Model {
}
FollowUpOffer.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    slot_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    reason: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    time: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    expiry: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    is_used: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'follow_up_offers',
    timestamps: true,
    underscored: true,
});
exports.default = FollowUpOffer;
//# sourceMappingURL=follow_up_offer.js.map