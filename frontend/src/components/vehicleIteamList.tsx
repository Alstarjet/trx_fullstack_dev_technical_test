import type { VehicleData } from "../interfaces/vehicle";
import './vehicleIteamList.css'
import type { markeVehicle } from '../interfaces/vehicle'
import { useState } from "react";
import {Link} from "react-router-dom";
interface IteamV {
    vehicle: VehicleData
    id: string
    marker: markeVehicle
    deleteIteam:(id:string,plate:string)=>void
}

function ItemVehicle({ vehicle, id, marker, deleteIteam}: IteamV) {
    const [coord, setCoord] = useState<{ lat: number; lng: number } | null>(null)
    const vehicleContentString =
    '<div id="vehicleInfo">' +
    '<div id="vehicleNotice">' +
    "</div>" +
    `<h1 id="vehicleHeading" class="vehicleHeading">${vehicle.placa}</h1>` +
    '<div id="vehicleBodyContent">' +
    `<ul>` +
    `<li><strong>Placa:</strong> ${vehicle.placa}</li>` +
    `<li><strong>Número Económico:</strong> ${vehicle.numero_economico}</li>` +
    `<li><strong>VIN:</strong> ${vehicle.vim}</li>` +
    `<li><strong>Asientos:</strong> ${vehicle.asientos}</li>` +
    `<li><strong>Seguro:</strong> ${vehicle.seguro}</li>` +
    `<li><strong>Número de Seguro:</strong> ${vehicle.seguro_numero}</li>` +
    `<li><strong>Marca:</strong> ${vehicle.BRAND}</li>` +
    `<li><strong>Modelo:</strong> ${vehicle.MODEL}</li>` +
    `<li><strong>Año:</strong> ${vehicle.YEAR}</li>` +
    `<li><strong>Color:</strong> ${vehicle.COLOR}</li>` +
    `</ul>` +
    "</div>" +
    "</div>";

    const ChangeMarker = () => {
        if (!coord){
            const index = Math.floor(Math.random() * marker.coordinates.length)
            const newCoordinates = { lat: marker.coordinates[index][1], lng: marker.coordinates[index][0] }
            marker.marker?.setPosition(newCoordinates)
            setCoord(newCoordinates)
        }else{
            marker.marker?.setPosition(coord)
        }
        marker.info?.close()
        marker.info?.setContent(vehicleContentString)
        marker.marker?.setVisible(true)
    }
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + id}
                    aria-expanded="false"
                    aria-controls={id}
                    onClick={() => ChangeMarker()}
                >
                    <div>
                        Placa: {vehicle.placa} Año: {vehicle.YEAR}
                    </div>
                </button>
            </h2>
            <div
                id={id}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <ul className="GridVehicleIteam">
                        <li><strong>Placa:</strong> {vehicle.placa}</li>
                        <li><strong>Número Económico:</strong> {vehicle.numero_economico}</li>
                        <li><strong>VIN:</strong> {vehicle.vim}</li>
                        <li><strong>Asientos:</strong> {vehicle.asientos}</li>
                        <li><strong>Seguro:</strong> {vehicle.seguro}</li>
                        <li><strong>Número de Seguro:</strong> {vehicle.seguro_numero}</li>
                        <li><strong>Marca:</strong> {vehicle.BRAND}</li>
                        <li><strong>Modelo:</strong> {vehicle.MODEL}</li>
                        <li><strong>Año:</strong> {vehicle.YEAR}</li>
                        <li><strong>Color:</strong> {vehicle.COLOR}</li>
                        <li><button onClick={()=>deleteIteam(id,vehicle.placa)}>Eliminar</button></li>
                        <li><Link to={"/edit/"+id}><button>Editar</button></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default ItemVehicle


