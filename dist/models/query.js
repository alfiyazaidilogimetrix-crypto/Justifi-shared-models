"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Query extends sequelize_1.Model {
}
Query.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    category: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'legal_area',
            key: 'id',
        },
    },
    query: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    is_closed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    medias: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.INTEGER),
        allowNull: true,
        defaultValue: [],
    },
}, {
    sequelize: db_1.default,
    tableName: 'queries',
    timestamps: true,
    underscored: true,
});
exports.default = Query;
//# sourceMappingURL=query.js.map