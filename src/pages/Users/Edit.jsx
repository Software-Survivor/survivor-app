import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/users/queries";
import { useParams, Link } from "react-router-dom";
import Input from "../../components/Input";

const EditUser = () => {
    const { _id } = useParams();
    const { data, error, loading } = useQuery(GET_USER, {
        variables: {
            _id,
        },
    });

  console.log(data)

  return (
    <div className="flew flex-col w-full h-full items-center justify-center p-10">
      <Link to="/usuarios">
        <i className="fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900" />
      </Link>
      <h1 className="m-4 text-3xl text-gray-800 font-bold text-center">
        Editar Usuario
      </h1>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className="flex flex-col items-center justify-center"
      >
        <Input
          label="Nombre de la persona:"
          type="text"
          name="nombre"
          defaultValue={data.User.name}
          required={true}
        />
        <Input
          label="Apellido de la persona:"
          type="text"
          name="apellido"
          defaultValue={data.User.lastname}
          required={true}
        />
        <Input
          label="Correo de la persona:"
          type="email"
          name="correo"
          defaultValue={data.User.email}
          required={true}
        />
        <Input
          label="Identificación de la persona:"
          type="text"
          name="identificacion"
          defaultValue={data.User.identification}
          required={true}
        />
         <DropDown
          label="Estado de la persona:"
          name="estado"
          defaultValue={data.User.state}
          required={true}
          options={Enum_EstadoUsuario}
        />
        <span>Rol del usuario: {data.User.rol}</span>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text="Confirmar"
        />
      </form>
    </div>
  );
};

export default EditUser;
