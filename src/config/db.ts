import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const useSSL: boolean = process.env.DB_SSL === 'true';

let sslConfig:
  | false
  | { ca?: string; require?: boolean; rejectUnauthorized?: boolean } = false;

if (useSSL) {
  const sslCertPath = process.env.CERTIFICATES_PATH
    ? path.resolve(process.env.CERTIFICATES_PATH)
    : null;

  if (sslCertPath && fs.existsSync(sslCertPath)) {
    sslConfig = {
      ca: fs.readFileSync(sslCertPath, 'utf8'),
      rejectUnauthorized: false,
    };
  } else {
    // Cloud DBs often don't require CA file
    sslConfig = {
      require: true,
      rejectUnauthorized: false,
    };
  }
}

const sequelize = new Sequelize(
  process.env.PG_DB as string,
  process.env.PG_USER as string,
  process.env.PG_PASS as string,
  {
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
  },
);

// Test the connection
export async function TestConnection(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log('Sequelize connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default sequelize;
