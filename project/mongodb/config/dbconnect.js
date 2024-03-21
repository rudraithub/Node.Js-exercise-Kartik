const mongoose = require('mongoose')

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connect to database');
    } catch (error) {
        console.log(error.message);
    }
}

dbconnect()