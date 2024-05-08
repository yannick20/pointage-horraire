import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
//import { migrate } from 'drizzle-orm/better-sqlite3/migrator';


export const sqlite = new Database('sqlite.db');
export const db: BetterSQLite3Database = drizzle(sqlite, { logger: true });

// migrate(db, { migrationsFolder: './drizzle' });