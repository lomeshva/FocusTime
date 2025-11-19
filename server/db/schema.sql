-- USERS
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

-- SESSIONS
CREATE TABLE IF NOT EXISTS sessions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    duration_minutes INT,
    break_minutes INT,
    completed_at TIMESTAMP DEFAULT NOW()
);

-- SETTINGS
CREATE TABLE IF NOT EXISTS settings (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    font_size INT DEFAULT 16,
    theme VARCHAR(50) DEFAULT 'light',
    color_blind_mode BOOLEAN DEFAULT FALSE
);