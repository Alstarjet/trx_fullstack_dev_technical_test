import type { VehicleData } from "../interfaces/vehicle"
const URL_BACK = import.meta.env.VITE_URL_BACK


async function postVehicle(vehicle: VehicleData) {
    try {
        const response = await fetch(URL_BACK + "/vehicle/create", {
            method: 'POST',
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
export default postVehicle