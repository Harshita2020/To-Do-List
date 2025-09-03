import React from 'react'

const ActionButton = ({label, onClick, color}) => {
    const baseClasses = "border rounded-xl text-white py-2 px-4 cursor-pointer"

    const colorClasses = {
        blue: "bg-blue-400 border-blue-400",
        red: "bg-red-400 border-red-400",
        green: "bg-green-400 border-green-400",
         
    }
  return (
    <button onClick={onClick} className={`${baseClasses} ${colorClasses[color]}`}>
        {label}
    </button>
  )
}

export default ActionButton