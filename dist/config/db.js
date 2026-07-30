"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestConnection = TestConnection;
const sequelize_1 = require("sequelize");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const useSSL = process.env.DB_SSL === 'true';
let sslConfig = false;
if (useSSL) {
    const sslCertPath = process.env.CERTIFICATES_PATH
        ? path_1.default.resolve(process.env.CERTIFICATES_PATH)
        : null;
    if (sslCertPath && fs_1.default.existsSync(sslCertPath)) {
        sslConfig = {
            ca: fs_1.default.readFileSync(sslCertPath, 'utf8'),
            rejectUnauthorized: false,
        };
    }
    else {
        // Cloud DBs often don't require CA file
        sslConfig = {
            require: true,
            rejectUnauthorized: false,
        };
    }
}
const sequelize = new sequelize_1.Sequelize((process.env.PG_NAME || process.env.PG_DB), process.env.PG_USER, (process.env.PG_PASSWORD || process.env.PG_PASS), {
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    // 🔑 KEY PART
    dialectOptions: useSSL ? { ssl: sslConfig } : { ssl: false },
});
// Test the connection
async function TestConnection() {
    try {
        await sequelize.authenticate();
        console.log('Sequelize connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
exports.default = sequelize;
//# sourceMappingURL=db.js.map