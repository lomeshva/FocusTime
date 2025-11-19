// Singleton DB Connection
const { Pool } = require('pg');

class Database {
    constructor() {
        if (!Database.instance) {
            this.pool = new Pool({
                user: 'postgres',
                host: 'localhost',
                database: 'focustime',
                password: 'password',
                port: 5432
            });
            Database.instance = this;
        }
        return Database.instance;
    }
    query(text, params) {
        return this.pool.query(text, params);
    }
}

const dbInstance = new Database();
Object.freeze(dbInstance);

module.exports = dbInstance;