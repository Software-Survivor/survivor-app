import React from "react";
import { useUser } from "../context/user";
import { useDark } from "../context/dark";
import { useNavigate } from "react-router";
const Index = () => {
  const navigateRegister = useNavigate();
  const navigateLogin = useNavigate();
  const { userData } = useUser();
  const { modeDark, setModeDark } = useDark();

  const naveRegister = () => {
    navigateRegister("/auth/register");
  };

  const naveLogin = () => {
    navigateLogin("/auth/login");
  };

  return (
    <>
      <div>
        <div className="items-center justify-items-center grid grid-flow-col grid-rows-2 gap-4 w-full h-full p-6 mt-10">
          <div>
            <h1 className="bg-blue-300 font-sans text-3xl p-8 rounded">
              Bienvenidos a Gestión de proyectos
            </h1>
          </div>
          <div>
            <button
              className="bg-purple-600 text-white rounded border-gray-500 border-solid border-2 m-5 p-3"
              onClick={() => {
                naveRegister();
              }}
            >
              Regístrate
            </button>
            <button
              className="bg-purple-600 text-white rounded border-gray-500 border-solid border-2 m-5 p-3"
              onClick={() => {
                naveLogin();
              }}
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
