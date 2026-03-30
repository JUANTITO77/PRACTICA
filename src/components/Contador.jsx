import { useState } from "react"

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Contador
                </h2>

                <p className="text-4xl font-semibold text-blue-600 mb-6">
                    {contador}
                </p>

                <div className="flex gap-4 justify-center">
                    
                    <button 
                        onClick={() => setContador(prev => prev - 1)}
                        className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
                    >
                        -
                    </button>

                    <button 
                        onClick={() => setContador(prev => prev + 1)}
                        className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
                    >
                        +
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Contador