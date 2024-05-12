const URL_BACK = import.meta.env.VITE_URL_BACK
import type { VehicleQueryParams, Response } from "../interfaces/consut"

async function getListVehicles(queryParams: VehicleQueryParams): Promise<Response> {
    const query = buildQuery(queryParams)

    try {
        const response = await fetch(URL_BACK + "/vehicle/search?" + query, {
            method: 'GET',
        })
        if (response.status >= 200 && response.status <= 299) {
            const data: Response = await response.json()
            return data
        } else {
            throw new Error('Error al obtener los datos de la API')

        }
    } catch (error) {
        throw error
    }
}
function buildQuery(params: VehicleQueryParams): string {
    let queryParams: string = ""
    if (params.page !== undefined) {
        queryParams = queryParams + 'page=' + params.page
    }
    if (params.min_year !== undefined && params.max_year !== undefined) {
        queryParams = queryParams + '&min_year=' + params.min_year
        queryParams = queryParams + '&max_year=' + params.max_year
    }
    if (params.color !== undefined) {
        queryParams = queryParams + '&color=' + params.color
    }
    if (params.model !== undefined) {
        queryParams = queryParams + '&model=' + params.model
    }
    if (params.min_seats !== undefined) {
        queryParams = queryParams + '&min_seats=' + params.min_seats
    }
    if (params.max_seats !== undefined) {
        queryParams = queryParams + '&max_seats=' + params.max_seats
    }


    return queryParams
}

const queryParams: VehicleQueryParams = {
    min_year: 2000,
    max_year: 2022,
    color: 'red',
    model: 'Sedan',
    min_seats: 4,
    max_seats: 7,
    page: 1
}

export default getListVehicles