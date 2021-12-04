import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/users/queries";
import { Link } from "react-router-dom";


const IndexUsers = () => {
  const { data, loading, error } = useQuery(GET_USERS);

  useEffect(() => {
    console.log("Data servidor", data);
  }, [data]);

  return (
    <div>
      Datos Usuarios:
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Identificación</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data && data.Usuario ? (
            <>
              {data.Usuario.map((u) => {
                return (
                  <tr key={u._id}>
                    <td>{u.name}</td>
                    <td>{u.lastname}</td>
                    <td>{u.email}</td>
                    <td>{u.identification}</td>
                    <td>{u.rol}</td>
                    <td>{u.status}</td>
{/*                     <td>
                      <Link to={`/usuarios/editar/${u._id}`}>
                        <i className="fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer" />
                      </Link>
                    </td> */}
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
  );
};

export default IndexUsers;
