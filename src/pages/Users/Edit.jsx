import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "../../graphql/users/queries";
import { useParams, Link } from "react-router-dom";
import ButtonLoading from "../../components/ButtonLoading";
import DropDown from "../../components/Dropdown";
import Input from "../../components/Input";
import useFormData from "../../hook/useFormData";
import alerts from "../../utils/alerts";
import { EDIT_USER } from "../../graphql/users/mutations";
import { Enum_StatusUsers } from "../../utils/enums";

const EditUser = () => {
  const { form, formData, updateFormData } = useFormData(null);

  const { _id } = useParams();

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_USER, {
    variables: {
      _id,
    },
  });

  const [
    editUser,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(EDIT_USER);

  const submitForm = (e) => {
    e.preventDefault();
    delete formData.rol;
    editUser({
      variables: { _id, ...formData },
    });
  };

  console.log(queryData);

  useEffect(() => {
    if (mutationData) {
      alerts.alertSucees("Edición exitosa");
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      alerts.alertErrorMessage("Error en la edición del usuario");
    }
    if (queryError) alerts.alertErrorMessage("Error consultando el usuarios");
  }, [queryError, mutationError]);

  if (queryLoading) return <div>Loading...</div>;

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
          name="name"
          defaultValue={queryData.User.name}
          required={true}
        />
        <Input
          label="Apellido de la persona:"
          type="text"
          name="lastname"
          defaultValue={queryData.User.lastname}
          required={true}
        />
        <Input
          label="Correo de la persona:"
          type="email"
          name="email"
          defaultValue={queryData.User.email}
          required={true}
        />
        <Input
          label="Identificación de la persona:"
          type="text"
          name="identification"
          defaultValue={queryData.User.identification}
          required={true}
        />
        <DropDown
          label="Estado de la persona:"
          name="status"
          defaultValue={queryData.User.status}
          required={true}
          options={Enum_StatusUsers}
        />
        <span>Rol del usuario: {queryData.User.rol}</span>
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
