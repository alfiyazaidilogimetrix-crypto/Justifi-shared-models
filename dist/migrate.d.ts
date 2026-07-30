/**
 * Sync all models to the database.
 *
 * @param mode
 *  - `'alter'`  – add missing columns / change types (preserves data)
 *  - `'force'`  – DROP all tables and recreate from scratch (destroys data!)
 *  - `'safe'`   – only create tables that don't exist yet (no alter, no drop)
 */
export declare function syncTables(mode?: 'alter' | 'force' | 'safe'): Promise<void>;
//# sourceMappingURL=migrate.d.ts.map