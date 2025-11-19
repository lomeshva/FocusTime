CREATE TABLE IF NOT EXISTS sessions(
  session_id SERIAL PRIMARY KEY,
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  duration INT
);
