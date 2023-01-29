require('dotenv').config()
const express = require('express')
const app = express()
PORT = process.env.PORT
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
