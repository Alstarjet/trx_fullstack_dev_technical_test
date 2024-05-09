import express from 'express'
import routes from './routes/routes'
import database from './database/connection'

const app =express()

app.use(express.json())
database.connect()
const PORT=3000

app.use('/vehicle',routes)
app.listen(PORT,()=>{
    console.log("Starting in port: "+PORT)
})
