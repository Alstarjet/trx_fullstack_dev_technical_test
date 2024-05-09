import type { VehicleData } from "../interfaces/vehicle";
function itemVehicle(vehicles:VehicleData,id:string){
    return(
        <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+id} aria-expanded="false" aria-controls={id}>
            <div>Placa: {vehicles.placa} Año: {vehicles.YEAR}</div>
          </button>
        </h2>
        <div id={id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            MUHOS DATOS
          </div>
        </div>
      </div>
    )
}
export default itemVehicle