import React from 'react'

const Card = ({children}) => {
    return (
        <div className="bg-white rounded-lg shadow-md h-full py-10 text-gray-75">
            {children}
        </div>
    )
}

export default Card
