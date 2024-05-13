import { Request, Response } from 'express'

import type { Route } from '../interfaces/consult'

const URL_SERVICE_ROUTE = process.env.URL_SERVICE_ROUTE

const handlerGETRoute = async (_req: Request, res: Response) => {
    try {
        if(!URL_SERVICE_ROUTE){
            throw new Error('Url de servicio rutas no encontrada ')
        }
        const response = await fetch(URL_SERVICE_ROUTE, {
            method: 'GET',
        })
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API de rutas: ' + response.status)
        }
        const data: Route []= await response.json()
        res.json(data)
    } catch (error) {
        console.error('Error en el manejador de la ruta:', error)
        res.status(500).json({ error: 'Error interno del servidor' })
    }
}

export default handlerGETRoute
