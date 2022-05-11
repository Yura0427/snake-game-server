require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const models = require('./models');
const router = require('./routes/index');


const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
        await sequelize.sync();
        app.listen(PORT, () => console.log(`server run on port ${PORT}`));
    } catch (e) {
        console.log(e);

    }
};

start();