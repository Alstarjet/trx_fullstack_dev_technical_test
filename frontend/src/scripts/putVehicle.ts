import type { VehicleData } from "../interfaces/vehicle"
const URL_BACK = import.meta.env.VITE_URL_BACK


async function putVehicle(vehicle: VehicleData,id:string) {
    try {
        const response = await fetch(URL_BACK + "/vehicle/update/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vehicle)
        })
        if (response.status >= 200 && response.status <= 299) {
            return 
        } else {
            const data: {error:string} = await response.json()
            throw new Error(data.error)
        }
    } catch (error) {
        throw error
    }
}
export default putVehicle