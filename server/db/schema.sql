CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    onboarding_complete BOOLEAN DEFAULT FALSE,
    font_size INT DEFAULT 16,
    theme VARCHAR(50) DEFAULT 'light'
);

CREATE TABLE IF NOT EXISTS sessions(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    duration_minutes INT,
    break_minutes INT,
    completed_at TIMESTAMP DEFAULT NOW()
);
