import express from 'express'
import validateVehicleData from '../middleware/vehicle'
import handlerCreateVehicle from '../handlers/createVehicle'
import handlerDeleteVehicle from '../handlers/deleteVehicle'
import handlerUpdateVehicle from '../handlers/updateVehicle'
import handlerFindVehicle from '../handlers/findVehicle'
import handlerGetVehicles from '../handlers/getVehicles'
import handlerGETRoute from '../handlers/getRoute'
import cors from 'cors'

const routes = express.Router()

routes.get('/find/:id', handlerFindVehicle)

routes.get('/search', handlerGetVehicles)
routes.get('/route',handlerGETRoute)

routes.post('/create', validateVehicleData, handlerCreateVehicle)
routes.options('/delete/:id',cors())
routes.delete('/delete/:id', cors(), handlerDeleteVehicle)

routes.put('/update/:id', validateVehicleData, handlerUpdateVehicle)

export default routes