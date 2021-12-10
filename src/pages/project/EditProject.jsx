import React, { useEffect } from "react";
import Card from "../../components/card/Card";
import useFormData from "../../hook/useFormData";
import { GET_PROJECT_BY_ID } from "../../graphql/project/queries";
import { EDIT_PROJECT } from "../../graphql/project/mutation";
import { EDIT_INSCRIPTION_ENDDATE_NOW } from "../../graphql/incriptions/mutation";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import TitleCard from "../../components/card/TitleCard";
import Line from "../../components/Line";
import Input from "../../components/Input";
import ButtonLoading from "../../components/buttons/ButtonLoading";
import DropDown from "../../components/DropDown";
import { Enum_ProjectStatus, Enum_ProjectStage } from "../../utils/enum";
import Header from "../../components/Header";
import alerts from "../../utils/iziToast/alerts";


const EditProject = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const _id_ = useParams();
  const _id = _id_["_id"];
  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_PROJECT_BY_ID, {
    variables: { _id },
  });
  const [
    editProject,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(EDIT_PROJECT);

  const [
    editInscriptionEndDate,
    {
      data: mutationDataInscription,
      loading: mutationLoadingInscription,
      error: mutationErrorInscription,
    },
  ] = useMutation(EDIT_INSCRIPTION_ENDDATE_NOW);

  const listIdInscriptionsBYProjects = () => {
    const list = [];
    if (queryData) {
      queryData["DetailProject"].inscription.map((u) => {
        list.push(u._id);
      });
    }
    return list;
  };

  const listIdInscrip = listIdInscriptionsBYProjects();

  const destruturingOnlyBudget = () => {
    const {
      nameProject,
      startDate,
      endDate,
      stageProject,
      statusProject,
      ...data
    } = formData;
    const rest = { budget: parseFloat(data.budget) };
    return rest;
  };

  const destruturingOnlyRest = () => {
    const { budget, ...rest } = formData;
    return rest;
  };

  const mixData = () => {
    const newData = { ...destruturingOnlyBudget(), ...destruturingOnlyRest() };
    return newData;
  };

  // console.log("listIdInscrip", listIdInscrip);

  // console.log("formData", formData);

  const submitForm = (e) => {
    e.preventDefault();
    const mixData_ = mixData();
    if (
      formData["statusProject"] === "ACTIVO" &&
      formData["stageProject"] === "NULO"
    ) {
      mixData_["stageProject"] = "INICIADO";
      const yourDate = new Date(Date.now());
      mixData_["startDate"] = yourDate.toISOString().split()[0];
    }
    if (formData["statusProject"] === "INACTIVO") {
      //Si cambia el estado del proyecto a estado inactivo, todas las fechas de finalización del las inscripcines asociadas a ese proyecto y que esten vacias, quedan automaticamente con la fecha actual.
      listIdInscrip.map((u) => {
        editInscriptionEndDate({ variables: { _id: u } });
      });
    }
    if (mixData_["stageProject"] === "TERMINADO") {
      // Si la fase del proyecto cambia a terminado, el estado cambia a inactivo
      mixData_["statusProject"] = "INACTIVO";
      const yourDate = new Date(Date.now());
      mixData_["endDate"] = yourDate.toISOString().split()[0];

      editProject({
        variables: {
          _id,
          fields: mixData_,
        },
      });
      listIdInscrip.map((u) => {
        editInscriptionEndDate({ variables: { _id: u } });
      });
    } else {
      editProject({
        variables: {
          _id,
          fields: mixData_,
        },
      });
    }
  };

  useEffect(() => {
    if (mutationData) {
      alerts.alertSucees("Usuario modificado correctamente");
      //   redireccionar
    }
  }, [mutationData, mutationDataInscription]);

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
  console.log("data: ", queryData);

  return (
    <Card>
      <TitleCard title="Nuevo Proyecto" />
      <Line />

      <form
        className="mx-8 my-5"
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
      >
        <Header title="Información General" />
        <div className="flex flex-row">
          <div className="flex-1 mr-1">
            <Input
              type="text"
              name="nameProject"
              required={true}
              label="Nombre"
              defaultValue={queryData && queryData.DetailProject.nameProject}
            />
          </div>
          <div className="flex-1 mr-1">
            <Input
              type="number"
              name="budget"
              required={true}
              label="Presupuesto"
              defaultValue={queryData && queryData.DetailProject.budget}
            />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex-1 mr-1">
            <Input
              type="date"
              name="startDate"
              label="Fecha inicio"
              defaultValue={
                queryData && queryData.DetailProject.startDate === null
                  ? ""
                  : queryData.DetailProject.startDate.slice(0, 10)
              }
            />
          </div>
          <div className="flex-1 mr-1">
            <Input
              type="date"
              name="endDate"
              label="Fecha Fin"
              defaultValue={
                queryData && queryData.DetailProject.endDate === null
                  ? ""
                  : queryData.DetailProject.endDate.slice(0, 10)
              }
            />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex-1 mr-1">
            <DropDown
              label="Fase"
              name="stageProject"
              defaultValue={queryData && queryData.DetailProject.stageProject}
              required={true}
              options={Enum_ProjectStage}
            />
          </div>
          <div className="flex-1 mr-1">
            <DropDown
              label="Estado"
              name="statusProject"
              defaultValue={queryData && queryData.DetailProject.statusProject}
              required={true}
              options={Enum_ProjectStatus}
            />
          </div>
        </div>

        <Line />
        <ButtonLoading nameButton="Guardar" type="submit" />
      </form>
    </Card>
  );
};

export default EditProject;
