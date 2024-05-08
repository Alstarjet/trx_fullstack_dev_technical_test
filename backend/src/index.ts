import express from 'express'
import routes from './routes/routes'

const app =express()

app.use(express.json())

const PORT=3000
app.get('/hello',(_req, res)=>{
    console.log("Someone is here")
    res.send("hello 2")
})
app.use('/',routes)
app.listen(PORT,()=>{
    console.log("Starting in port: "+PORT)
})
