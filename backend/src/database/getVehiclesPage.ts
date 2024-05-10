import database from "./connection";
import type { Vehicle } from '../interfaces/vehicle';
const pageSize = 5
const getVehiclesByQueryPage = async (criteria: any, pageN:number): Promise<Vehicle[]> => {
    try {
        const db = database.getDB()
        if (!db) {
            throw new Error('DB is not connected')
        }
        const collection = db.collection("vehicles")
        const skip = (pageN - 1) * pageSize;
        
        const results = await collection.find(criteria).skip(skip).limit(pageSize).toArray()
        const vehicles: Vehicle[] = results.map(result => ({
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
export default getVehiclesByQueryPage