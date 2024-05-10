interface VehicleData {
    placa: string
    numero_economico: string
    vim: string
    asientos: string
    seguro: string
    seguro_numero: string
    BRAND: string
    MODEL: string
    YEAR: string
    COLOR: string
}
interface Geometry {
    coordinates: [number, number]|[number, number][]
    type: string
}

interface Properties {
    address: string|null
    name: string|null
    type: string|null
}

interface Feature {
    geometry: Geometry
    type: string
    properties: Properties
}

interface FeatureCollection {
    features: Feature[]
    type:string
}



export type{VehicleData,FeatureCollection}