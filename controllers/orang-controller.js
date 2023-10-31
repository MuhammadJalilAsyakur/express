const Orang = require("../models/Orang");

module.exports = {
    getAllData: (req, res) => {
        res.json({
            message: "Hello",
            data: Orang
        })
    },


    getDataById: (req, res) => {
        const { id } = req.params;
        const data = Orang.find((item) => item.id == id);
        res.json({
            message: "NAGAPIN KAMU KIMAK",
            data: data
        })
    },

    addData: (req, res) => {

    },

    editDataById: (req, res) => {

    },

    deleteDataById: (req, res) => {

    },

}