const express = require("express")
const db = require('./config/connection')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/user', require('./routers/user'))
app.use('/', require('./routers/album'))

const port = 8080

app.listen(port, () => console.log(`VinyLogger app listening on port ${port}`))
