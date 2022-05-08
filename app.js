const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')

dotenv.config()

//Middlewares
app.use(cors())
app.use(bodyParser.json())

//Import Routes
const postsRoute = require('./routes/posts')

//Middleware
app.use('/posts', postsRoute)

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
})



//Connect To DB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true }, 
() => console.log('Connected to DB!'))

app.listen(3000,() => console.log('Server Up and Running'))