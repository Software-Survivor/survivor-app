import React, {useEffect} from "react";
import Card from "../../components/card/Card";
import TitleCard from "../../components/card/TitleCard";
import Line from "../../components/Line";
import Input from "../../components/Input";
import ButtonLoading from "../../components/buttons/ButtonLoading";
import TextArea from "../../components/inputs/TextArea";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../../graphql/project/mutation";
import useFormData from "../../hook/useFormData";
import alerts from "../../utils/iziToast/alerts";
import { useUser } from "../../context/user";

const CreateProject = () => {
    const {userData} = useUser();
    const { form, formData, updateFormData } = useFormData();
    const [
      createProject,
      { data: mutationDataProject, loading: mutationLoadingProject, error: mutationErrorProject },
    ] = useMutation(CREATE_PROJECT);


    const destruturingDataProject  = () =>{ 
        const _id = {leader:userData._id}
        const {objectiveGeneral, objectiveEspecific, ...data} = formData
        const {nameProject, budget, ...dataObjective} = formData
        const n = {nameProject: data.nameProject}
        const b = {budget: parseFloat(data.budget)}
        const o = {objective:[{description:dataObjective["descriptionGeneral"], typeObjective:"GENERAL"}, {description:dataObjective["descriptionEspecific"], typeObjective:"ESPECIFICO"}]}
        const projectData = {..._id, ...n, ...b, ...o}
        return projectData;
    }
   
  
    const submitForm = (e) => {
      e.preventDefault();
      console.log('enviar datos backed: ', destruturingDataProject());
      createProject({variables: destruturingDataProject()});
    };

    useEffect(() => {
        if (mutationDataProject) {
          alerts.alertSucees("Usuario modificado correctamente");
        }
      }, [mutationDataProject]);
    
      useEffect(() => {
        if (mutationErrorProject) {
          alerts.alertErrorMessage("Error al ejecutar la mutación");
        }
      }, [mutationErrorProject]);

  const plusIcons = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-plus-circle"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
  return (
    <Card>
      <TitleCard title="Nuevo Proyecto" />
      <Line />
      <form className="mx-8 my-5" onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <div className="flex flex-row">
          <div className="flex-1 mr-1">
            <Input label="Nombre" type="text" name="nameProject" />
          </div>
          <div className="flex-1 ml-1">
            <Input label="Presupuesto" type="number" name="budget" />
          </div>
        </div>
        <Line />
        <TextArea label="Objetivo General" type="text" name="descriptionGeneral" />
        <TextArea label="Objetivo Específico" type="text" name="descriptionEspecific" />

        <Line />
        <ButtonLoading nameButton="Guardar" type="submit" />
      </form>
    </Card>
  );
};

export default CreateProject;
