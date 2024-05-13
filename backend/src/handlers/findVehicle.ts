import { Request, Response } from 'express'
import findDocById from '../database/findVehicle';

const handlerFindVehicle = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const doc = await findDocById(id);
        res.json( doc );
    } catch (error:any) {
        // Si ocurre un error, responde con un código de estado 500 y el mensaje de error
        res.status(500).json({ error: error.message });
    }
}

export default handlerFindVehicle
