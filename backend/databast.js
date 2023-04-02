const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://shagun:sharma@cluster0.ahckz4m.mongodb.net/fashionFlareMERN?retryWrites=true&w=majority")


module.exports = {connection}