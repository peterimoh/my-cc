const mongoose = require('mongoose')

exports.connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE, {
             useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log(`MongoDB connect: ${conn.connection.host}`);
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}