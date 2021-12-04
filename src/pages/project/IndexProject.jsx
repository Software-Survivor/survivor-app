import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import CardSmall from "../../components/card/CardSmall";
import TitleCard from "../../components/card/TitleCard";
import Line from "../../components/Line";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../graphql/project/queries";
import { GET_PROJECT_BY_ID } from "../../graphql/project/queries";

const IndexProject = () => {
  const [_id, setId] = useState("6195c80cc3545191cd21bf0a");
  const { data, error, loading } = useQuery(GET_PROJECTS);
  const {
    data: dataByID,
    errorByID,
    loadingByID,
  } = useQuery(GET_PROJECT_BY_ID, { variables: { _id } });
  console.log("dataByID", dataByID);
  console.log("data", data)

  useEffect(() => {
    if (error) {
      // alerts.alertErrorMessage("Error consultando los usurios");
    }
  }, [error]);

  if (loading) return <div>Cargando....</div>;

  const circeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-circle"
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
  return (
    <div className="flex flex-col md:flex-row text-md ">
      <div className="flex-1 pb-1 m-0.5">
        <Card>
          <TitleCard title="Listado" />
          <Line />
          <table className="my-4 table-fixed w-full text-center divide-y divide-gray-100 text-xs">
            <thead>
              <tr>
                <th className="py-4">Projecto</th>
                <th className="py-4">Fecha</th>
                <th className="py-4">Presupuesto</th>
                <th className="py-4">Etapa</th>
                <th className="py-4">Estado</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.ListProjects.map((u) => {
                  return (
                    <tr
                      key={u._id}
                      className="hover:bg-gray-50"
                      onClick={() => {
                        setId(u._id);
                      }}
                    >
                      <td className="py-4">{u.nameProject}</td>
                      <td className="py-4">{u.startDate === null ? "Pendiente" : u.startDate.slice(0, 10)}</td>
                      <td className="py-4">$ {u.budget}</td>
                      <td className="py-4">{u.stageProject.toLowerCase()}</td>
                      <td className="py-4">{u.statusProject.toLowerCase()}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Card>
      </div>
      <div className="flex-1  m-0.5">
        <Card>
          {/* Header card */}
          <div className="flex flex-col md:flex-row md:justify-between items-center text-xs mt-9 px-7">
            <div className="flex flex-col">
              <span className="font-bold text-3xl items-center text-gray-100">
                {dataByID && dataByID.DetailProject.nameProject}
              </span>
              <div className="flex flex-row">
                <div className="flex flex-row mt-1 items-center md:items-left">
                  <span className="text-tic-green">{circeIcon}</span>
                  <span className="text-xs mx-1">
                    {dataByID &&
                      dataByID.DetailProject.stageProject.toLowerCase()}
                  </span>
                </div>
                <div className="flex flex-row  mt-1 items-center md:items-left">
                  <span className="text-tic-250">{circeIcon}</span>
                  <span className="text-xs mx-1">
                    {dataByID &&
                      dataByID.DetailProject.statusProject.toLowerCase()}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-left">
                <span className="text-xxs">Presupuesto:</span>
                <span className="text-xs font-bold">
                  ${dataByID && dataByID.DetailProject.budget}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div>
                <span className="flex text-sm bg-gray-100 h-6 py-1 px-4 rounded-xl mt-4">
                  Juan Andres Rozo
                </span>
                <span className="text-xxs pl-4">Líder</span>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-full hidden md:flex -ml-3"></div>
            </div>
          </div>
          <Line />
          {/* Header card */}

          {/* Body card */}
          <div className="text-sm mt-4 px-7">
            <h5 className="mb-2 text-lg font-bold">Objetivos</h5>
            {dataByID &&
              dataByID.DetailProject.objective.map((u) => {
                return (
                  <CardSmall>
                    <p>
                      <span className="font-bold">{u.typeObjective}: </span>
                      {" " + u.description}
                    </p>
                  </CardSmall>
                );
              })}
          </div>
          <Line />
          <div className="text-sm mt-4 px-7">
            <h5 className="mb-2 text-lg font-bold">Avances</h5>
            {dataByID &&
              dataByID.DetailProject.advancement.map((u) => {
                return (
                  <CardSmall>
                    <p className="mt-2">
                      <span className="font-bold text-sm">Descripción: </span>
                      {u.description}
                    </p>
                    <span className="mt-3 text-xs font-bold">
                      creado por: {" " + u.createdBy["name"]}
                    </span>
                    <span className="mt-2">Obervación: {u.observations}</span>
                  </CardSmall>
                );
              })}
          </div>
          <Line />
          <div className="text-xs mt-4 px-7">
            <h5 className="mb-2 text-lg font-bold">Incripciones</h5>
            {dataByID &&
              dataByID.DetailProject.inscription.map((u) => {
                return (
                  <CardSmall>
                    <span className="font-bold text-xs">
                      Estudiante: {" " + u.student["name"]}
                    </span>
                  </CardSmall>
                );
              })}
          </div>
          {/* Body card */}

          {/* <TitleCard title="resultado" />
          <table className="my-4 table-fixed w-full text-left divide-y divide-gray-100 text-xs">
            
            <tbody >
              {dataByID &&
                    <tr key={dataByID.DetailProject._id} className="hover:bg-gray-50">
                      <td className="py-4">{dataByID.DetailProject.nameProject}</td>
                      <td className="py-4">{dataByID.DetailProject.startDate.slice(0, 10)}</td>
                      <td className="py-4">$ {dataByID.DetailProject.budget}</td>
                      <td className="py-4">{dataByID.DetailProject.stageProject.toLowerCase()}</td>
                      <td className="py-4">{dataByID.DetailProject.statusProject.toLowerCase()}</td>
                    </tr>
                  
                }
            </tbody>
          </table> */}
        </Card>
      </div>
    </div>
  );
};

export default IndexProject;

{
  /* <div className="bg-white rounded-lg shadow-md p-8 divide-y divide-gray-100">
<span className="text-lg text-gra">Listado</span>

</div> */
}
