interface VehicleData {
    placa: string
    numero_economico: string
    vim: string
    asientos: number
    seguro: string
    seguro_numero: string
    BRAND: string
    MODEL: string
    YEAR: number
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

interface markeVehicle{
    marker:google.maps.Marker|null
    coordinates:[number, number][]
    VehicleData:VehicleData|null
    info:google.maps.InfoWindow|null
}

export type{VehicleData,FeatureCollection,markeVehicle}