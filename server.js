const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config')

const apiRequest = require('./API/Routes/api_request')

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome Board')
})

mongoose.connect(MONGO_URI)
    .then(() => { console.log('Database Connected. Ready For Check!!') })
    .catch(err => console.log(err));

app.use('/v3/api', apiRequest)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server Started... Running @ PORT ${PORT}`) })