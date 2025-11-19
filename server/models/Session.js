module.exports = `
    CREATE TABLE IF NOT EXISTS sessions(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id),
        duration_minutes INT,
        break_minutes INT,
        completed_at TIMESTAMP DEFAULT NOW()
    );
`;