import express from 'express'

const routes=express.Router()

routes.get('/',(_req, res)=>{
res.send('Hello, i am here')
})

export default routes