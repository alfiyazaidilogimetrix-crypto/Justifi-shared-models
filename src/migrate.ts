// migrate.ts — Sync all Sequelize models with the database
import {
  sequelize,
  User,
  UserRecord,
  UserDetails,
  Lawyer,
  Junior,
  LegalArea,
  Query,
  QueryResponse,
  Slot,
  RylawChat,
  File,
  CompanyRegistration,
  CompanyLawyer,
  Task,
  StateData,
  District,
  DcAdvCase,
  DcCaseDetail,
  DcComplex,
  DcCourt,
} from './models';

/**
 * Sync all models to the database.
 *
 * @param mode
 *  - `'alter'`  – add missing columns / change types (preserves data)
 *  - `'force'`  – DROP all tables and recreate from scratch (destroys data!)
 *  - `'safe'`   – only create tables that don't exist yet (no alter, no drop)
 */
export async function syncTables(
  mode: 'alter' | 'force' | 'safe' = 'safe',
): Promise<void> {
  try {
    console.log(`⏳ Starting Sequelize model sync (mode: ${mode})...`);

    switch (mode) {
      case 'force':
        // ⚠️  Drops ALL tables and recreates them — DATA WILL BE LOST
        await sequelize.sync({ force: true });
        break;
      case 'alter':
        // Updates existing tables to match models (adds/changes columns)
        await sequelize.sync({ alter: true });
        break;
      case 'safe':
      default:
        // Only creates tables that don't already exist
        await sequelize.sync();
        break;
    }

    console.log('✅ All models synced with the database successfully');
  } catch (err) {
    console.error('❌ Error from Sequelize sync:', err);
    throw err;
  } finally {
    await sequelize.close();
  }
}

// ─── CLI entry point ─────────────────────────────────────────────────────────
// Read mode from command-line argument:  node migrate.js --force | --alter | --safe
const arg = process.argv[2]?.replace('--', '') as 'alter' | 'force' | 'safe' | undefined;
const mode = ['alter', 'force', 'safe'].includes(arg!) ? arg! : 'safe';

syncTables(mode);
