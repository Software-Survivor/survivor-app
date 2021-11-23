import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const DropDown = ({ label, name, defaultValue = "", required, options }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const optionsSelect = [
    ["", "Seleccione una opción", true],
    ...Object.entries(options),
  ];
  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);
  return (
    <>
      <span>{label}</span>
      <label
        htmlFor={name}
        className="flex flex-col border rounded-sm mt-2 border-gray-75 h-9 pl-2 w-full"
      >
        <select
          required={required}
          name={name}
          className="input mt-2 focus:outline-none "
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          {optionsSelect.map((o) => {
            return (
              <option key={nanoid()} value={o[0]} disabled={o[2] ?? false} >
                {o[1]}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
};

export default DropDown;
