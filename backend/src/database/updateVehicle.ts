import { ObjectId } from 'mongodb';
import database from "./connection";
import type { Vehicle } from '../interfaces/vehicle';

const updateDoc = async (id: string, vehicle: Vehicle): Promise<boolean> => {
    try {
        const db = database.getDB()
        if (!db) {
            throw new Error('DB is not connected')
        }
        const collection = db.collection("vehicles")
        vehicle._id=new ObjectId(id)
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: vehicle })

        if (result.modifiedCount === 1) {
            return true
        } else {
            return false
        }
    } catch (error) {
        throw error
    }
}

export default updateDoc;
