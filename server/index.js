const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/session', require('./routes/sessionRoutes'));

app.get('/', (req,res)=>res.send('FocusTime API is live'));

app.listen(5000, ()=>console.log('Server running on port 5000'));
