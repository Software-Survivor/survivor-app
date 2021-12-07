import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/users/queries";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import alerts from "../../utils/iziToast/alerts";
import { Enum_Rol } from "../../utils/enum";
import { Enum_Status } from "../../utils/enum";
import Table from "../../components/Tables";
import Card from "../../components/card/Card";

const IndexUsers = () => {
  const headTitle = ["ID", "Nombres", "Apellidos", "Identidicación", "Email", "Estado", "Rol"];
  const sx = "15";
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

  const { data, error, loading } = useQuery(GET_USERS);
  useEffect(() => {}, [data]);

  useEffect(() => {
    if (error) {
      alerts.alertError(error);
    }
  }, [error]);

  if (loading) {
    return <div>Cargando....</div>;
  }

  return (
    <Card>
      <Header title={"Usuarios"} />
          <Table headTitle={headTitle} dataDb={data} subdata="Users" />
    </Card>
  );
};

export default IndexUsers;
