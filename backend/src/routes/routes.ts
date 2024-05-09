import express from 'express'
import validateVehicleData from '../middleware/vehicle'
import handlerCreateVehicle from '../handlers/createVehicle'
import handlerDeleteVehicle from '../handlers/deleteVehicle'
import handlerUpdateVehicle from '../handlers/updateVehicle'
import handlerFindVehicle from '../handlers/findVehicle'
const routes=express.Router()

routes.get('/:id',handlerFindVehicle)

routes.post('/create',validateVehicleData,handlerCreateVehicle)

routes.delete('/delete/:id',handlerDeleteVehicle)

routes.put('/update/:id',validateVehicleData,handlerUpdateVehicle)

export default routes