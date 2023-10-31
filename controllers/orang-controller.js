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
        const { id } = req.params;
        const newOrang = req.body;

        const index = Orang.findIndex((item) => item.id == id);
        if (index === -1) {
            return res.status(404).json({ error: "GK ADAA" })
        }

        Orang[index] = { ...Orang[index], ...newOrang };

        res.status(201).json({
            message: "DAta berhasil di ubah",
            data: newOrang
        })
    },

    deleteDataById: (req, res) => {

    },

}