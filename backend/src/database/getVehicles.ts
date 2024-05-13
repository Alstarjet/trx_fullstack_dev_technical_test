import database from "./connection";
import type { Vehicle } from '../interfaces/vehicle';
const getVehiclesByQuery = async (criteria: any): Promise<Vehicle[]> => {
    try {
        const db = database.getDB()
        if (!db) {
            throw new Error('DB is not connected')
        }
        const collection = db.collection("vehicles")
        const results = await collection.find(criteria).toArray()
        const vehicles: Vehicle[] = results.map(result => ({
            _id:result._id,
            placa: result.placa,
            numero_economico: result.numero_economico,
            vim: result.vim,
            asientos: result.asientos,
            seguro: result.seguro,
            seguro_numero: result.seguro_numero,
            BRAND: result.BRAND,
            MODEL: result.MODEL,
            YEAR: result.YEAR,
            COLOR: result.COLOR
        }))
        return vehicles
    } catch (error) {
        throw error
    }
}
export default getVehiclesByQuery