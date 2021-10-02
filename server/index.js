const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const {connectDB} = require('./config/db')
const app = express()


// child routes 
const userRoutes = require('./routes/auth.route')



//connect to db
connectDB()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

//routes
app.get('/', (req, res) => {
    res.status(200).json({time: Date().toString()})
})
app.use('/api', userRoutes)


const port = process.env.PORT || 5000
 
app.listen(port, ()=>console.log(`server running @ ${port}`))


