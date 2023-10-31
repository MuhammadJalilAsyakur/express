const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");


const Orang = require("../models/Orang");
const { getAllData, getDataById, addData, editDataById, deleteDataById } = require('../controllers/orang-controller');

router.use(express.urlencoded({ extended: true }));
router.get('/users', getAllData);
router.get('/users/:id', getDataById);
router.put('/users/:id', editDataById);
router.post('/users', bodyParser.urlencoded({ extended: true }), addData);

module.exports = router;