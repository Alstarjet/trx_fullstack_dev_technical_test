import type { VehicleData } from "./vehicle"
interface VehicleQueryParams {
    min_year?: number
    max_year?: number
    color?: string
    model?: string
    min_seats?: number
    max_seats?: number
    page:number
}
interface Response{
    currentPage:number
    totalPages:number
    docs:VehicleData[]
}
interface Station {
    id: string;
    type: string;
    order: number;
}
interface Route {
    geojson:  FeatureCollection
    code: string;
    is_active: boolean;
    route_id: string;
    distance: number;
    updated_at: string;
    route_title: string;
    created_at: string;
    stations: Station[];
    error: string | null;
    time_zone: string;
    status: string;
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
export type {VehicleQueryParams,Response,Route,FeatureCollection}
