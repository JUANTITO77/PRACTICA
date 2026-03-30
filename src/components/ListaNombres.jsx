import React, { useState } from 'react'

const ListaNombres = () => {
    const[nombre, setNombre] = useState("")
    const[nombres,setNombres] = useState([])

    const guardar =()=>{
        setNombres([...nombres,nombre]);
        setNombre("")
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        
        <p className="text-lg font-semibold text-gray-700 mb-3">
          Ingresa Nombre
        </p>

        <input 
            value={nombre}
            onChange={(e)=>{setNombre(e.target.value), console.log(nombre)}}
          type="text" 
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button 
            onClick={guardar}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Enviar
        </button>

        <ul className="mt-4 space-y-2">
            {
                nombres.map((e,i)=>{
                    return <li className="bg-gray-100 p-2 rounded-md" key={i}>{e}</li>
                })
            }
        </ul>

      </div>

    </div>
  )
}

export default ListaNombres