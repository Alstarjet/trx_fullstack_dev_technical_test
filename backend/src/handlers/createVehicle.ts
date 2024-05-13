import { Request, Response } from 'express'
import { Vehicle } from '../interfaces/vehicle'
import createDoc from '../database/createVehicle'

const handlerCreateVehicle = async (req: Request, res: Response) => {
    try {
        const vehicleData: Vehicle = req.body;
        const newId = await createDoc(vehicleData);
        res.json({ id: newId });
    } catch (error:any) {
        // Si ocurre un error, responde con un código de estado 500 y el mensaje de error
        res.status(500).json({ error: error.message });
    }
}

export default handlerCreateVehicle
