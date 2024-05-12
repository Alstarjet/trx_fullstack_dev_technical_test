const URL_BACK = import.meta.env.VITE_URL_BACK
import type { VehicleData } from "../interfaces/vehicle"

async function getOneVehicle(id: string): Promise<VehicleData> {
    try {
        const response = await fetch(URL_BACK + "/vehicle/find/" + id, {
            method: 'GET',
        })
        if (response.status >= 200 && response.status <= 299) {
            const data: VehicleData = await response.json()
            return data
        } else {
            throw new Error('Error al obtener los datos de la API')
        }
    } catch (error) {
        throw error
    }
}


export default getOneVehicle