const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    picture: {
        type: String,
        default: "https://res.cloudinary.com/duhiildi0/image/upload/v1725968232/pexels-sadman-2747267_dtbshx.jpg"
    }
},{
    timestamps: true
})
module.exports = mongoose.model("User",userSchema);