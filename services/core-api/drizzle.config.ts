import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    dialect: 'postgresql',
    schema : './src/db/schemas',
    casing: 'snake_case',
    migrations: {
        prefix: 'timestamp',
        table: "__schema_migrations__",
        schema: "public",
    },
    verbose: true,
})