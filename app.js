const express = require('express')
const logger = require('morgan')
const skillsRouter = require('./routes/skills')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

// /api/skills is just an endpoint 
app.use('/api/skills', skillsRouter)

module.exports = app


