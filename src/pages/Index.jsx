import React from "react";
import { useUser } from "../context/user";
import { useDark } from "../context/dark";

const Index = () => {
  const { userData } = useUser();
  const { modeDark, setModeDark } = useDark();
  console.log(userData);
  return (
    <>
      <div>
        <div className={`${ modeDark ? "text-7xl bg-black font-mono text-white font-bold text-center mt-80": "text-7xl bg-blue-200 font-mono font-bold text-center mt-80" }`} >
          Hola Mundo!
          <p className="text-red-300 text-2xl mt-2">
            useContex: {userData.data}
          </p>
        </div>
        <div className="font-mono text-center mt-2">
        <button
          className="bg-gray-300 p-2 rounded border-gray-500 border-solid border-2"
          onClick={() => setModeDark(!modeDark)}
        >
          {modeDark ? "Desactivar" : "Activar"}Dark Mode
        </button>
        </div>
      </div>
    </>
  );
};

export default Index;
