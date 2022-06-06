
import DetallesPaciente from "./DetallesPaciente"

const ListadoPacientes = ( { pacientes, setPaciente, eliminarPaciente } ) => {



  return (
    <div className="md:w-1/2 lg:w-3/5 my-12 md:my-0 mx-5">

    { pacientes.length > 0 ? (

    <>
      <h2 className="font-bold text-3xl text-center">Listado Pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">Administra tus <span className="font-bold text-indigo-600">Pacientes y Citas</span></p>


        { pacientes.map( (paciente)=> {

          return (
            <DetallesPaciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          )
        }) }

    </>

    ) : (

    <>
      <h2 className="font-bold text-3xl text-center">No hay pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">Agrega pacientes y <span className="font-bold text-indigo-600">aparecerán aquí</span></p>
    </>

      ) }

      
    </div>
    
  )
}

export default ListadoPacientes