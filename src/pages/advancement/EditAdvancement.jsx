import React from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";

const EditAdvancement = () => {
  return (
    <>
      <Header title="Edición de avances" />
      <div className="flex flex-row">
        <div className="text-xs pb-1 divide-x divide-gray-500 w-1/2 mx-1">
          <div className="bg-white rounded-lg shadow-md px-8 py-8 divide-y divide-gray-100">
            <form>
              <Input
                type="text"
                name="name"
                required={true}
                label="Nombre"
                /* defaultValue={queryData.User.name} */
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAdvancement;
