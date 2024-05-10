import type { VehicleData } from "../interfaces/vehicle";
import './vehicleIteamList.css'
function itemVehicle(vehicles: VehicleData, id: number) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#" + id.toString}
                    aria-expanded="false"
                    aria-controls={id.toString()}
                >
                    <div>
                        Placa: {vehicles.placa} Año: {vehicles.YEAR}
                    </div>
                </button>
            </h2>
            <div
                id={id.toString()}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <ul className="GridVehicleIteam">
                        <li><strong>Placa:</strong> {vehicles.placa}</li>
                        <li><strong>Número Económico:</strong> {vehicles.numero_economico}</li>
                        <li><strong>VIN:</strong> {vehicles.vim}</li>
                        <li><strong>Asientos:</strong> {vehicles.asientos}</li>
                        <li><strong>Seguro:</strong> {vehicles.seguro}</li>
                        <li><strong>Número de Seguro:</strong> {vehicles.seguro_numero}</li>
                        <li><strong>Marca:</strong> {vehicles.BRAND}</li>
                        <li><strong>Modelo:</strong> {vehicles.MODEL}</li>
                        <li><strong>Año:</strong> {vehicles.YEAR}</li>
                        <li><strong>Color:</strong> {vehicles.COLOR}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default itemVehicle


