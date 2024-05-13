const URL_BACK = import.meta.env.VITE_URL_BACK
import type { Route } from "../interfaces/consut"

async function consultGeoJson(): Promise<Route[]> {
    try {
        const response = await fetch(URL_BACK+'/vehicle/route', {
            method: 'GET',
        })
        if (response.status >= 200 && response.status <= 299) {
            const data: Route []= await response.json();
            return data;
        } else {
            throw new Error('Error al obtener los datos de la API de rutas: ' + response.status);
        }
    } catch (error) {
        throw error;
    }
}



export default consultGeoJson