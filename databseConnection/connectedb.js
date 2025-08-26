const mongoose = require("mongoose")
const connectTodb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Users")
        console.log('Connected to database!');
    } catch (error) {
        console.error(error);
    }
}
module.exports = {connectTodb};
