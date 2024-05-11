import express from 'express'
import routes from './routes/routes'
import database from './database/connection'
import cors from 'cors'

const app =express()
app.use(cors({
    origin: 'http://localhost:5173'
  }));
app.use(express.json())

database.connect()
const PORT=3000

app.use('/vehicle',routes)
app.listen(PORT,()=>{
    console.log("Starting in port: "+PORT)
})
