const express = require("express");
const router = express.Router();

const Orang = require("../models/Orang");
const { getAllData, getDataById, addData, editDataById, deleteDataById } = require('../controllers/orang-controller');

router.get('/', getAllData);
router.get('/:id', getDataById);
router.put('/:id', editDataById);
router.post('/', addData);

module.exports = router;