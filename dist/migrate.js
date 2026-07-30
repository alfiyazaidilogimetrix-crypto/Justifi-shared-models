"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncTables = syncTables;
// migrate.ts — Sync all Sequelize models with the database
const models_1 = require("./models");
/**
 * Sync all models to the database.
 *
 * @param mode
 *  - `'alter'`  – add missing columns / change types (preserves data)
 *  - `'force'`  – DROP all tables and recreate from scratch (destroys data!)
 *  - `'safe'`   – only create tables that don't exist yet (no alter, no drop)
 */
async function syncTables(mode = 'safe') {
    try {
        console.log(`⏳ Starting Sequelize model sync (mode: ${mode})...`);
        switch (mode) {
            case 'force':
                // ⚠️  Drops ALL tables and recreates them — DATA WILL BE LOST
                await models_1.sequelize.sync({ force: true });
                break;
            case 'alter':
                // Updates existing tables to match models (adds/changes columns)
                await models_1.sequelize.sync({ alter: true });
                break;
            case 'safe':
            default:
                // Only creates tables that don't already exist
                await models_1.sequelize.sync();
                break;
        }
        console.log('✅ All models synced with the database successfully');
    }
    catch (err) {
        console.error('❌ Error from Sequelize sync:', err);
        throw err;
    }
    finally {
        await models_1.sequelize.close();
    }
}
// ─── CLI entry point ─────────────────────────────────────────────────────────
// Read mode from command-line argument:  node migrate.js --force | --alter | --safe
const arg = process.argv[2]?.replace('--', '');
const mode = ['alter', 'force', 'safe'].includes(arg) ? arg : 'safe';
syncTables(mode);
//# sourceMappingURL=migrate.js.map