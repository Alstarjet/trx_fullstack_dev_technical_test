import database from "./connection";
import type  {Vehicle}  from '../interfaces/vehicle';

const createDoc = async (vehicle: Vehicle): Promise<string> => {
    try {
        const db = database.getDB()
        if (!db) {
            throw new Error('DB is not connected')
        }
        vehicle._id=undefined
        const collection = db.collection("vehicles")
        const test = await collection.insertOne(vehicle)
        if (!test) {
            throw new Error('DB error to insertOne')
        }
        return test.insertedId.toString()
    } catch (error) {
        throw error
    }
}

export default createDoc;
