import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import DropDown from "../../components/Dropdown";
import ButtonLoading from "../../components/ButtonLoading";
import { Enum_Rol } from "../../utils/enums";
import useFormData from "../../hook/useFormData";
import { REGISTER_USER } from "../../graphql/auth/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router";

const Register = () => {

    const navigate = useNavigate()

  const { form, formData, updateFormData } = useFormData();

  const [
    register,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(REGISTER_USER);

  const submitForm = (e) => {
    e.preventDefault();
    register({
      variables: { formData },
    });
  };

  useEffect(() => {
    console.log("datos de la mutación de registro: ", mutationData);

    if (mutationData) {
      if (mutationData.register.token) {
        localStorage.setItem("token", mutationData.register.token);
        navigate('/')
      }
    }
  }, [mutationData]);

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <h1 className="text-3xl font-bold my-4">Regístrate</h1>
      <form
        className="flex flex-col"
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
      >
        <div className="grid grid-cols-2 gap-5">
          <Input label="Nombre:" name="nombre" type="text" required />
          <Input label="Apellido:" name="apellido" type="text" required />
          <Input
            label="Documento:"
            name="identificacion"
            type="text"
            required
          />
          <DropDown
            label="Rol deseado:"
            name="rol"
            required={true}
            options={Enum_Rol}
          />
          <Input label="Correo:" name="correo" type="email" required />
          <Input label="Contraseña:" name="password" type="password" required />
        </div>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={false}
          text="Registrarme"
        />
      </form>
      <span>¿Ya tienes una cuenta?</span>
      <Link to="/auth/login">
        <span className="text-blue-700">Inicia sesión</span>
      </Link>
    </div>
  );
};

export default Register;
