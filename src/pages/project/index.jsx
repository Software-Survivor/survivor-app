import React, {useEffect} from 'react'
import Header from "../../components/Header";
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../../graphql/project/queries';
import alerts from '../../utils/iziToast/alerts';


const IndexProject = () => {
    const {data, error, loading} = useQuery(GET_PROJECTS)
    
    useEffect(() => {
      if (error) {
        alerts.alertErrorMessage("Error consultando los usurios")
      }
    }, [error]);

    if (loading) return <div>Cargando....</div>;

  return (
    <>
      <Header title={"Proyectos"}/>
      <div className="text-xs pb-1 divide-x divide-gray-500">
      <div className="bg-white rounded-lg shadow-md px-8 py-8 divide-y divide-gray-100">
        <span className="text-lg text-gra">Listado</span>
        <table className="my-4 table-fixed w-full text-left divide-y divide-gray-100">
          <thead>
            <tr>
            
              <th className="py-4">Projecto</th>
              <th className="py-4">Presupuesto</th>
              <th className="py-4">Fecha de Inicio</th>
              <th className="py-4">Fecha de Fin</th>
              <th className="py-4">Estado</th>
              <th className="py-4">Stage</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.Projects.map((u) => {
                return (
                  <tr key={u._id}>
                    <td className="py-4">{u.nameProject}</td>
                    <td className="py-4">$ {u.budget}</td>
                    <td className="py-4">{u.startDate.slice(0,10)}</td>
                    <td className="py-4">{u.endDate.slice(0,10)}</td>
                    <td className="py-4">{u.statusProject}</td>
                    <td className="py-4">{u.stageProject}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default IndexProject;
