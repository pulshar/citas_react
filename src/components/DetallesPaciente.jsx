
const DetallesPaciente = ( {paciente, setPaciente, eliminarPaciente} ) => {

  const { nombre, propietario, email, fecha, sintomas } = paciente

  const handleEliminar = () => {
    const respuesta = confirm(`¿Desea eliminar al paciente ${nombre}?`)

    respuesta && eliminarPaciente(paciente.id)
  }
  return (
    <div className="bg-white shadow-md rounded-md p-7 mb-5">
        <p className="text-gray-600 uppercase font-bold text-sm mb-3">Nombre: <span className="font-normal text-base normal-case">{nombre}</span></p>
        <p className="text-gray-600 uppercase font-bold text-sm mb-3">Propietario: <span className="font-normal text-base normal-case">{propietario}</span></p>
        <p className="text-gray-600 uppercase font-bold text-sm mb-3">Email: <span className="font-normal text-base normal-case">{email}</span></p>
        <p className="text-gray-600 uppercase font-bold text-sm mb-3">Fecha alta: <span className="font-normal text-base normal-case">{fecha}</span></p>
        <p className="text-gray-600 uppercase font-bold text-sm">Síntomas: <span className="font-normal text-base normal-case">{sintomas}</span></p>
        <div className="flex justify-end gap-3 mt-5">
          <button
            type="button"
            className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-md"
            onClick={handleEliminar}

          >Eliminar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
            onClick={ ()=> {
              setPaciente(paciente)
            }}
          >Editar
          </button>
        </div>
    </div>
  )
}

export default DetallesPaciente