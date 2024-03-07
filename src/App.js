import './App.css';
import React, { useState } from "react";

function App() {
  const [expediente, setExpediente] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [tipo, setTipo] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [fecha, setFecha] = useState("");
  const [anexos, setAnexos] = useState([]);

const handleAnexosChange = (index, e) => {
    const files = e.target.files;
    const newAnexos = [...anexos];
    newAnexos[index] = files[0];
    setAnexos(newAnexos);
  };

const handleAgregarAnexo = () => {
    setAnexos([...anexos, null]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a través de una petición HTTP, por ejemplo
    console.log("Datos del formulario:", { expediente, municipio, tipo, ciudad, fecha, anexos });
    // Limpia el formulario después de enviarlo
    setExpediente("");
    setMunicipio("");
    setTipo("");
    setCiudad("");
    setFecha("");
    setAnexos([]);
  };
  return (
    <div className="container mx-auto p-6">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expediente">
          Numero de Expediente
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="expediente"
          type="text"
          placeholder="Numero de Expediente"
          value={expediente}
          onChange={(e) => setExpediente(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expediente">
          Municipio
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="municipio"
          type="text"
          placeholder="Durango"
          value={municipio}
          onChange={(e) => setMunicipio(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expediente">
          Tipo de Expediente
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tipo"
          type="text"
          placeholder="Acusatorio b"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expediente">
          Ciudad / tribunal
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="ciudad"
          type="text"
          placeholder="Tribunal del estado de durango"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expediente">
          Fecha
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fecha"
          type="date"
          placeholder="Fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      {/* Resto de campos de formulario */}
      {anexos.map((anexo, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`anexos-${index}`}>
              Anexo {index + 1} (PDF)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`anexos-${index}`}
              type="file"
              accept=".pdf"
              onChange={(e) => handleAnexosChange(index, e)}
            />
          </div>
        ))}
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleAgregarAnexo}
          >
            Agregar Anexo
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
