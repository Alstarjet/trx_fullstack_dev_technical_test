import { Request, Response, NextFunction } from 'express'
import { Vehicle } from '../interfaces/vehicle'
interface typeError{
    field:string
    expected:string
}

const validateVehicleData = (req: Request, res: Response, next: NextFunction) => {
    const vehicleData: Vehicle = req.body

    const requiredFields = ['placa', 'numero_economico', 'vim', 'asientos', 'seguro', 'seguro_numero', 'BRAND', 'MODEL', 'YEAR', 'COLOR']
    const missingFields = requiredFields.filter(field => !(field in vehicleData))

    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Faltan campos requeridos: ${missingFields.join(', ')}` })
    }

    let typeErrors:typeError[] = []
    if (typeof vehicleData.placa !== 'string') {
        typeErrors.push({ field: 'placa', expected: 'string' })
    }
    if (typeof vehicleData.numero_economico !== 'string') {
        typeErrors.push({ field: 'numero_economico', expected: 'string' })
    }
    if (typeof vehicleData.vim !== 'string') {
        typeErrors.push({ field: 'vim', expected: 'string' })
    }
    if (typeof vehicleData.asientos !== 'number') {
        typeErrors.push({ field: 'asientos', expected: 'number' })
    }
    if (typeof vehicleData.seguro !== 'string') {
        typeErrors.push({ field: 'seguro', expected: 'string' })
    }
    if (typeof vehicleData.seguro_numero !== 'string') {
        typeErrors.push({ field: 'seguro_numero', expected: 'string' })
    }
    if (typeof vehicleData.BRAND !== 'string') {
        typeErrors.push({ field: 'BRAND', expected: 'string' })
    }
    if (typeof vehicleData.MODEL !== 'string') {
        typeErrors.push({ field: 'MODEL', expected: 'string' })
    }
    if (typeof vehicleData.YEAR !== 'number') {
        typeErrors.push({ field: 'YEAR', expected: 'number' })
    }
    if (typeof vehicleData.COLOR !== 'string') {
        typeErrors.push({ field: 'COLOR', expected: 'string' })
    }

    if (typeErrors.length > 0) {
        const errorMessage = typeErrors.map(error => `El campo '${error.field}' debería ser de tipo '${error.expected}'`).join('. ')
        return res.status(400).json({ error: errorMessage })
    }


    next()
    return
}

export default validateVehicleData
