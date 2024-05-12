import { Request, Response } from 'express'

import type { Route } from '../interfaces/consult'

const URL_SERVICE_ROUTE = 'https://lxelctvrnx7xs4eoxujkgqxk6u0khkdy.lambda-url.us-east-1.on.aws/'

const handlerGETRoute = async (_req: Request, res: Response) => {
    try {
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
