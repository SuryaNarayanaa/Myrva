import { drizzle } from 'drizzle-orm/neon-http';
import { DATABASE_URL } from './env';
import { schema } from '../db';

export const db = drizzle(DATABASE_URL, { schema });

