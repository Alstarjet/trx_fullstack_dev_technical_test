interface VehicleData {
    _id?:string|null
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


interface markeVehicle{
    marker:google.maps.Marker|null
    coordinates:[number, number][]
    VehicleData:VehicleData|null
    info:google.maps.InfoWindow|null
}

export type{VehicleData,markeVehicle}