import { Request, Response } from 'express'
import deleteDoc from '../database/deleteVehicle';

const handlerDeleteVehicle = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const num = await deleteDoc(id);
        res.json({ countDelete: num });
    } catch (error:any) {
        // Si ocurre un error, responde con un código de estado 500 y el mensaje de error
        res.status(500).json({ error: error.message });
    }
}

export default handlerDeleteVehicle
