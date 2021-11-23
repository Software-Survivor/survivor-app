import React from "react";

const Header = ({title}) => {
  return (
    <div className="flex felx-row text-3xl text-gray-100 mb-6 divide-y divide-gray-75">
      <div className="mb-4">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Header;
