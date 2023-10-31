const express = require("express");
const route = express.Router();
const orangRoute = require("./orang-route");


route.get('/', (req, res) => {
    res.json({
        message: 'hello kimak'
    })
});


route.use("/orang", orangRoute);

module.exports = route;