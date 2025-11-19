const express = require('express');
const cors = require('cors');
const sessionRoutes = require('./routes/sessionRoutes');
const onboardingRoutes = require('./routes/onboardingRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/sessions', sessionRoutes);
app.use('/api/onboarding', onboardingRoutes);
app.use('/api/settings', settingsRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
