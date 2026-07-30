"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class QueryResponse extends sequelize_1.Model {
}
QueryResponse.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    lawyer_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    query_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    response: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    isSelect: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    isSatisfied: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    review: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 5,
        },
    },
    is_user_closed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    is_lawyer_closed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    sequelize: db_1.default,
    tableName: 'query_response',
    timestamps: true,
    underscored: true,
});
exports.default = QueryResponse;
//# sourceMappingURL=query_response.js.map