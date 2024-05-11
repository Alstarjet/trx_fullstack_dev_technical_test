import type { Vehicle } from "./vehicle"
interface ResponseGet{
    currentPage:number
    totalPages:number
    docs:Vehicle[]
}
export {ResponseGet}