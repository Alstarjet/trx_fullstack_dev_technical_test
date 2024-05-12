const URL_BACK = import.meta.env.VITE_URL_BACK

async function deleteVehicle(id: string) {
    try {
        const response = await fetch(URL_BACK + "/vehicle/delete/" + id, {
            method: 'DELETE',
        })
        if (response.status >= 200 && response.status <= 299) {
            return
        } else {
            throw new Error('Error al obtener los datos de la API')
        }
    } catch (error) {
        throw error
    }
}


export default deleteVehicle