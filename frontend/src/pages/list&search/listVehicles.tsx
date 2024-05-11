import { useEffect, useState } from 'react';
import ItemVehicle from '../../components/vehicleIteamList';
import getListVehicles from '../../scripts/getVehicles';
import type { VehicleQueryParams } from '../../interfaces/consut';
import type { Response } from '../../interfaces/consut';
import type {markeVehicle} from '../../interfaces/vehicle'

interface VehicleList {
  marker:markeVehicle
}
function VehicleList({marker}:VehicleList) {
  const [filterTipo, setFilterTipo] = useState<string>('')
  const [filterAño, setFilterAño] = useState<number | null>(null)
  const [response, setResponse] = useState<Response>({
    currentPage: 1,
    totalPages: 1,
    docs: []
  })
  const [queryParams, setQuery] = useState<VehicleQueryParams>({
    page: 1
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getListVehicles(queryParams);
        setResponse(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const ChangePage = async (n: number) => {
    try {
      let pageQuery = queryParams
      pageQuery.page = (n < 1) ? 1 : n > response.totalPages ? response.totalPages : n
      const data = await getListVehicles(pageQuery);
      setResponse(data)
    } catch (error) {
      console.error(error);
    }

  }
  /*
  const ChangeMarker=()=>{
      const index=Math.floor(Math.random() * marker.coordinates.length)
      const newCoordinates ={ lat: marker.coordinates[index][1], lng: marker.coordinates[index][0] }
      marker.marker?.setPosition(newCoordinates)
      console.log({ lat: marker.coordinates[index][0], lng: marker.coordinates[index][1] })
  }*/

  return (
    <div>
      <h2>Lista de Vehículos</h2>
      <div>
        <label>
          Tipo:
          <input
            type="text"
            value={filterTipo}
            onChange={(e) => setFilterTipo(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Año:
          <input
            type="number"
            value={filterAño || ''}
            onChange={(e) =>
              setFilterAño(e.target.value ? parseInt(e.target.value) : null)
            }
          />
        </label>
      </div>
      <div className="accordion" id="accordionExample">
        {response?.docs.map((vehicle, index) => (
          <ItemVehicle vehicle={vehicle} id={index.toString()} marker={marker}></ItemVehicle>
  ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#" onClick={() => { ChangePage(response.currentPage - 1) }}>Previous</a></li>
          {Array.from({ length: response.totalPages }, (_, index) => (
            <li className={index + 1 == response.currentPage ? "page-item active" : "page-item"}><a className="page-link" href="#" onClick={() => { ChangePage(index + 1) }}>{index + 1}</a></li>
          ))}
          <li className="page-item"><a className="page-link" href="#" onClick={() => { ChangePage(response.currentPage + 1) }}>Next</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default VehicleList;
