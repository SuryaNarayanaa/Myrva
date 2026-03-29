import { defineConfig } from 'drizzle-kit';
import { DATABASE_URL } from './src/config/env'

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/db/schemas/**/*.ts',
    out: './drizzle',
    dbCredentials: {
        url: DATABASE_URL,
    },
    casing: 'snake_case',
    migrations: {
        prefix: 'timestamp',
        table: '__schema_migrations__',
        schema: 'public',
    },
    verbose: true,
    strict: true,
})