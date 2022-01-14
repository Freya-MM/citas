import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        //console.log( Object.keys(paciente) ) //Object.keys ayuda a comprobar si un objeto tiene algo 

        if( Object.keys(paciente).length > 0 ){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }

    }, [paciente])

    const generarID = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        //Validacion del formulario
        if( [nombre, propietario, email, fecha, sintomas].includes('') ){
            console.log('Hay al menos un campo vacio')
            setError(true)
            return
        } 

        setError(false)

        //Se construye el objeto
        const objetoPaciente = { nombre, propietario, email, fecha, sintomas }

        //Condición para saber si se esta editando o es un nuevo registro
        if(paciente.id){
            //Editando el Registro
            objetoPaciente.id = paciente.id
            
            const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
            setPacientes(pacienteActualizado)
            setPaciente({}) //Se limpia
        } else {
            //Nuevo registro
            objetoPaciente.id = generarID();
            //Se crea una copia del arreglo para crear una lista de pacientes y este no se sobreescriba
            setPacientes([...pacientes, objetoPaciente])
        }

        //Reiniciar el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-3">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>    

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error && <Error><p>Todos los campos son obligatorios</p></Error> /* Si error es true entonces imprime el div y envia un prop children */} 
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input type="text" id="mascota" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={nombre} onChange={ (e) => setNombre(e.target.value) }/>
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input type="text" id="propietario" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={propietario} onChange={ (e) => setPropietario(e.target.value) }/>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input type="email" id="email" placeholder="Email de contacto" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={email} onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input type="date" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-white" value={fecha} onChange={ (e) => setFecha(e.target.value) }/>
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea id="sintomas" placeholder="Describe los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={sintomas} onChange={ (e) => setSintomas(e.target.value) }/>
                </div>
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all duration-300 rounded-full" value={paciente.id ? "Editar paciente" : "Agregar paciente"} />
            </form>
        </div>
    )
}

export default Formulario