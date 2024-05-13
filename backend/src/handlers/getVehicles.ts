import { Request, Response } from 'express'
import getVehiclesByQuery from '../database/getVehicles'
import getVehiclesByQueryPage from '../database/getVehiclesPage'
import { ResponseGet } from '../interfaces/consult'

const handlerGetVehicles = async (req: Request, res: Response) => {
    try {
        const { min_year, max_year, color, model, min_seats, max_seats, page } = req.query

        // Contruimos la busqueda si los parametros estan en el query
        if(!page){
            res.status(400).json({ error: "Page is required" })
            return
        }
        const criteria: any = {}
        if (min_year && max_year) {
            criteria.YEAR = { $gte: parseInt(min_year as string), $lte: parseInt(max_year as string) }
        }
        if (color) {
            criteria.COLOR = color
        }
        if (model) {
            criteria.MODEL = model
        }
        if (min_seats && max_seats) {
            criteria.asientos = { $gte: parseInt(min_seats as string), $lte: parseInt(max_seats as string) }
        }
        const allvehicles = await getVehiclesByQuery(criteria)
        const vehicles = await getVehiclesByQueryPage(criteria,parseInt(page as string))
        const response:ResponseGet={
            currentPage:parseInt(page as string),
            totalPages:Math.ceil(allvehicles.length/5),
            docs:vehicles
        }
        res.json(response)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export default handlerGetVehicles
