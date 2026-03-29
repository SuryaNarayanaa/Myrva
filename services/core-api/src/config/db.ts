import { drizzle, type NeonHttpDatabase } from 'drizzle-orm/neon-http';
import { DATABASE_URL } from './env';
import { schema } from '../db';

export const db: NeonHttpDatabase<typeof schema> = drizzle(DATABASE_URL, { schema });

