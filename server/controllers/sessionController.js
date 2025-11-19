const pool = require('../config/db');

exports.createSession = async (req, res) => {
    const { user_id, duration_minutes, break_minutes } = req.body;

    const result = await pool.query(
        "INSERT INTO sessions (user_id, duration_minutes, break_minutes) VALUES ($1,$2,$3) RETURNING *",
        [user_id, duration_minutes, break_minutes]
    );

    res.json(result.rows[0]);
};