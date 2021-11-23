import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { GET_USER } from "../../graphql/users/queries";
import { EDIT_USER } from "../../graphql/users/mutation";
import Input from "../../components/Input";
import Button_1 from "../../components/buttons/Button_1";
import DropDown from "../../components/DropDown";
import Header from "../../components/Header";
import useFormData from "../../hook/useFormData";
import alerts from "../../utils/iziToast/alerts";
import { Enum_Rol, Enum_Status } from "../../utils/enum";

const EditUser = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();
  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_USER, {
    variables: { _id },
  });

  // console.log("data: ", queryData)
  const [
    editUser,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(EDIT_USER);

  const submitForm = (e) => {
    e.preventDefault();
    // console.log("formData, ", formData)
    editUser({
      variables: {
        _id,
        ...formData,
      },
    })
      .then((u) => {
        alerts.alertSucees();
      })
      .catch((error) => {
        alerts.alertErrorMessage(error);
      });
  };

  useEffect(() => {
    if (mutationError) {
      alerts.alertErrorMessage("Error al ejecutar la mutación");
    }
    if (queryError) {
      alerts.alertErrorMessage("Error ejecutar la consulta");
    }
  }, [queryError, mutationError]);

  if (queryLoading) {
    return <div>Cargando....</div>;
  }

  return (
    <>
      <Header title="Edición de Usuarios" />
      <div className="flex flex-row">
        <div className="text-xs pb-1 divide-x divide-gray-500 w-1/2 mx-1">
          <div className="bg-white rounded-lg shadow-md px-8 py-8 divide-y divide-gray-100">
            <form
              onSubmit={submitForm}
              onChange={updateFormData}
              ref={form}
              className=""
            >
              <Input
                type="text"
                name="name"
                required={true}
                label="Nombre"
                defaultValue={queryData.User.name}
              />
              <Input
                type="text"
                name="lastname"
                required={true}
                label="Apellido"
                defaultValue={queryData.User.lastname}
              />
              <Input
                type="text"
                name="identification"
                required={true}
                label="Identificación"
                defaultValue={queryData.User.identification}
              />
              <Input
                type="text"
                name="email"
                required={true}
                label="Email"
                defaultValue={queryData.User.email}
              />
              <Input
                type="text"
                label="Rol"
                defaultValue={queryData.User.rol}
                disabled={true}
              />
              <DropDown
                label="Estado"
                name="status"
                defaultValue={queryData.User.status}
                required={true}
                options={Enum_Status}
              />
              <Button_1
                nameButton="Guardar"
                type="submit"
                disabled={Object.keys(formData).length === 0}
              />
            </form>
          </div>
        </div>
        <div className="w-1/2 bg-tic-75 rounded-lg"></div>
      </div>
    </>
  );
};

export default EditUser;
