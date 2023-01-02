const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const dataRouter = require('./dataRouter')
const PORT = process.env.PORT || 5000

const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use("/auth", authRouter)
app.use('/data', dataRouter)
const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv:// < * mongose link * > `)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
