import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/db/schemas/**/*.ts',
    out: './drizzle',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
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