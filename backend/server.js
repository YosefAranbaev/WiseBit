const express = require('express');
const cors = require('cors');
const { outcomesRouter } = require("./routers/outcomesRouter");
const { authRouter } = require('./routers/authRouter');
const { usersRouter } = require('./routers/usersRouter');
const app = express();
const port = process.env.PORT || 8080;

require('dotenv').config();
require('./db_connection');

const logger = require('morgan');
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cross-Origin Resource Sharing 
app.use(cors({origin: 'http://127.0.0.1:5500', credentials: true}))

app.use('/api/outcomes', outcomesRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});