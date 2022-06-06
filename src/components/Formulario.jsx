import { useState, useEffect } from "react"
import ErrorAlert from "./ErrorAlert"


const Formulario = ( { pacientes, setPacientes, paciente, setPaciente } ) => {

  const [ nombre, setNombre] = useState('')
  const [ propietario, setPropietario ] = useState('')
  const [ email, setEmail] = useState('')
  const [ fecha, setFecha] = useState('')
  const [ sintomas, setSintomas] = useState('')

  const [ error, setError ] = useState(false)

 useEffect( ()=> {
   if( Object.keys(paciente).length > 0 ) {  // así comprobamos si el objeto está vacío
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)


   }
 }, [paciente])  // solo se ejecuta cuando el objeto paciente cambia

//  useEffect( ()=> {
//   console.log('El componente está listo')
// }, [])  // si no le pasamos dependencias se ejecuta cunado el componente está listo

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formulario 
    if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
      // Al menos un campo vacío'
      setError(true)
      return
    } 
      setError(false) 

      // construimos objeto de paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas 
      }

      // console.log(objetoPaciente)
      if( paciente.id ){
        // editando el registro
        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map( pacienteState => 
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        )
        
        setPacientes(pacientesActualizados)

        //limpiamos, liberamos el state
        setPaciente({})
        
      } else {
        // nuevo registro
        objetoPaciente.id = generarId()
        setPacientes( [...pacientes, objetoPaciente] )
      }

      // reiniciar formulario
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-bold text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">Añade pacientes y <span className="font-bold text-indigo-600">adminístralos</span></p>
      <form 
      onSubmit={ handleSubmit }
        className="bg-white shadow-md rounded-md p-7 ">
          { error &&
          // ejemplo con { children } 
            <ErrorAlert> 
              <p>Todos los campos son obligatorios</p>
            </ErrorAlert>  
          }
        <div className="campo mb-5">
          <label className="block text-gray-600 uppercase font-bold text-sm" htmlFor="mascota">Nombre mascota</label>
          <input 
          id="mascota"
          className="w-full border-2 mt-1 p-2 rounded-md placeholder-gray-400" 
          type="text" 
          placeholder="Nombre de la mascota" 
          value={nombre}
          onChange={ (e) => setNombre(e.target.value) }
          />
        </div>
        <div className="campo mb-5">
          <label className="block text-gray-600 uppercase font-bold text-sm" htmlFor="propietario">Nombre propietario</label>
          <input 
          id="propietario"
          className="w-full border-2 mt-1 p-2 rounded-md placeholder-gray-400" 
          type="text" 
          placeholder="Nombre del propietario" 
          value={propietario}
          onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>
        <div className="campo mb-5">
          <label className="block text-gray-600 uppercase font-bold text-sm" htmlFor="email">Email contacto</label>
          <input 
          id="email"
          className="w-full border-2 mt-1 p-2 rounded-md placeholder-gray-400" 
          type="mail" 
          placeholder="Email para contacto" 
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="campo mb-5">
          <label className="block text-gray-600 uppercase font-bold text-sm" htmlFor="alta">Alta</label>
          <input 
          id="alta"
          className="w-full border-2 mt-1 p-2 rounded-md" 
          type="date" 
          value={fecha}
          onChange={ (e) => setFecha(e.target.value) }
          />
        </div>
        <div className="campo mb-5">
          <label className="block text-gray-600 uppercase font-bold text-sm" htmlFor="sintomas">Síntomas</label>
          <textarea 
            id="sintomas"
            className="w-full border-2 mt-1 p-2 rounded-md" 
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full rounded-md text-white text-center p-3 uppercase font-bold text-sm hover:bg-indigo-700 cursor-pointer transition-colors"
          value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'}
          />
      </form>
    </div>
    
  )
}

export default Formulario