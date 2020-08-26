const express, {Router} = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const userRoutes = require('./routes/userRoutes.js')

const app = express()
const port = 3333

app.use(bodyParser.urlencoded({extended:false}))

userRoutes(app)

app.listen(port, () => console.log('Api Rodando na porta 3333'))