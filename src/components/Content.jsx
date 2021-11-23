import React from "react";

const Content = ({children}) => {
  return (
    <div className="divide-y divide-black p-10 p-10">
      <div className="flex flex-col text-gray-75 ">
      {children}
      </div>
    </div>
  );
};

export default Content;
