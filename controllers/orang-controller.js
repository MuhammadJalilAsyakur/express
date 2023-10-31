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
        const data = req.body;
        console.log(data)

        const newOrang = {
            id: Orang[Orang.length - 1].id + 1,
            value: data.value,
        }

        Orang.push(newOrang)

        res.status(201).json({
            message: "OK",
            data: newOrang
        })
    },


    editDataById: (req, res) => {

    },

    deleteDataById: (req, res) => {

    },

}