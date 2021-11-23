import React from 'react'

const Input = ({ type, name, required, label, defaultValue, disabled}) => {
    return (
        <>
        
        <span className="text-gray-100">{label}</span>
        <input
          type={type}
          name={name}
          required={required}
          defaultValue={defaultValue}
          disabled={disabled}
          className="border mt-2 mb-4 border-gray-75 h-9 pl-2 w-full focus:outline-none focus:ring-1 focus:ring-tic-50 focus:border-transparent focus:rounded-sm"
        />
      
      </>
    )
}

export default Input
