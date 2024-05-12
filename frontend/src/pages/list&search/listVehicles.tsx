import { useEffect, useState } from 'react';
import ItemVehicle from '../../components/vehicleIteamList';
import getListVehicles from '../../scripts/getVehicles';
import type { VehicleQueryParams } from '../../interfaces/consut';
import type { Response } from '../../interfaces/consut';
import type { markeVehicle } from '../../interfaces/vehicle'
import VehicleQueryForm from '../../components/query';
import deleteVehicle from '../../scripts/deleteVehicle';
interface VehicleList {
  marker: markeVehicle
}
function VehicleList({ marker }: VehicleList) {

  const [response, setResponse] = useState<Response>({
    currentPage: 1,
    totalPages: 1,
    docs: []
  })
  const [queryParams, setQuery] = useState<VehicleQueryParams>({
    page: 1
  })
  const fetchData = async () => {
    try {
      const data = await getListVehicles(queryParams);
      setResponse(data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
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
  const deleteIteam = async (id: string, plate: string) => {
    try {
      const deleteConfirm = window.confirm("Confirma si quieres elimnar el vehiculo con placa " + plate)
      if (deleteConfirm) {
        await deleteVehicle(id)
        let pageQuery = queryParams
        pageQuery.page = response.docs.length == 1 ? response.currentPage - 1 : response.currentPage
        const data = await getListVehicles(pageQuery);
        setResponse(data)
      }
    } catch (erro) {
      console.log(erro)
    }
  }

  return (
    <div>
      <h2>Lista de Vehículos</h2>
      <div>
        <VehicleQueryForm queryParams={queryParams} setQueryParams={setQuery}></VehicleQueryForm>
        <button type='button' onClick={fetchData}>Aplicar</button>
      </div>
      <div className="accordion" id="accordionExample">
        {response?.docs.map((vehicle, index) => (
          <ItemVehicle vehicle={vehicle} id={vehicle._id ? vehicle._id : index.toString()} marker={marker} deleteIteam={deleteIteam}></ItemVehicle>
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
