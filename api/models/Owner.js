const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    res_name: {
        type: "String",
    },
    email: {
        type: "String",
    },
    address: {
        type: "String",
    },
    password:{
        type: "String"
    },
});

const Owner = mongoose.model("Owner", OwnerSchema);

module.exports = Owner;