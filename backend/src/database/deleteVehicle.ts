import database from "./connection"
import { ObjectId } from 'mongodb'

const deleteDoc = async (vehicleId: string): Promise<number> => {
    try {
        const db = database.getDB()
        if (!db) {
            throw new Error('DB is not connected')
        }
        const collection = db.collection("vehicles")
        
        const result = await collection.deleteOne({ _id: new ObjectId(vehicleId) })
        if (result.deletedCount === 0) {
            throw new Error('No document found to delete')
        }

        return result.deletedCount;
    } catch (error) {
        throw error;
    }
}

export default deleteDoc;
