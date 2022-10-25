import pg from 'pg';

const { Pool } = pg;
const config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}


const db = new Pool(config);
export default db;

