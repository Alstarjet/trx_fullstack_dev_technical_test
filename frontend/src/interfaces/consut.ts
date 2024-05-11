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
export type {VehicleQueryParams,Response}