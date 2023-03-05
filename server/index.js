require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//will put routes here

app.use(function (req, res, next) {
    let err = new Error('Not Found');
    res.status(404);
    return next(err);
})

app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
