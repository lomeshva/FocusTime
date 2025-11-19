const express = require('express');
const cors = require('cors');

const sessionRoutes = require('./routes/sessionRoutes');
const settingsRoutes = require('./routes/settingsRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/sessions', sessionRoutes);
app.use('/api/settings', settingsRoutes);

app.listen(5001, () => console.log("Server running on port 5001"));