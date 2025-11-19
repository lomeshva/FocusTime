const db = require("../config/db");

exports.updateSettings = async (req, res) => {
    const { user_id, font_size, theme, color_blind_mode } = req.body;

    await db.query(
        `UPDATE settings 
         SET font_size=$2, theme=$3, color_blind_mode=$4 
         WHERE user_id=$1`,
        [user_id, font_size, theme, color_blind_mode]
    );

    res.json({ message: "Settings updated" });
};