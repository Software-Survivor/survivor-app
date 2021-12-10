import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/users/queries";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import alerts from "../../utils/iziToast/alerts";
import { Enum_Rol } from "../../utils/enum";
import { Enum_Status } from "../../utils/enum";
import Card from "../../components/card/Card";

const IndexUsers = () => {
  const headTitle = [
    "",
    "ID",
    "Nombres",
    "Apellidos",
    "Identidicación",
    "Email",
    "Estado",
    "Rol",
  ];
  const sx = "15";

  const { data, error, loading } = useQuery(GET_USERS);

  useEffect(() => {
    if (error) {
      alerts.alertError(error);
    }
  }, [error]);

  if (loading) {
    return <div>Cargando....</div>;
  }

  const edit = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sx}
      height={sx}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-edit"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );

  const trash = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sx}
      height={sx}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-trash"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  );

  const view = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sx}
      height={sx}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-eye"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  return (
    <Card>
      <Header title={"Usuarios"} />
      <div className="px-4">
        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-d">
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Identificación</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Rol</th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Opciones</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {data && data.Users ? (
                <>
                  {data.Users.map((u) => {
                    return (
                      <tr key={u._id}>
                        <td>{u.name}</td>
                        <td>{u.lastname}</td>
                        <td>{u.email}</td>
                        <td>{u.identification}</td>
                        <td>{Enum_Rol[u.rol]}</td>
                        <td>{Enum_Status[u.state]}</td>
                        <td>
                          <Link to={`user/edit/"${u._id}`}>
                            <span className="px-1 hover:text-tic-100">
                              {edit}
                            </span>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <div>No autorizado</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default IndexUsers;
