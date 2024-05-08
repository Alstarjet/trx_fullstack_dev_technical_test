import database from "./connection";
import type { Vehicle } from '../interfaces/vehicle';
import { ObjectId } from 'mongodb';

const findDocById = async (id: string): Promise<Vehicle | null> => {
    try {
        const db = database.getDB()
        if (!db) {
            throw new Error('DB is not connected')
        }
        const collection = db.collection("vehicles")
        const result = await collection.findOne({ _id: new ObjectId(id) })
        if (!result) {
            return null
        }
        const vehicle: Vehicle = {
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
        }
        return vehicle
    } catch (error) {
        throw error
    }
}

export default findDocById;
