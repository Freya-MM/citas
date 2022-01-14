const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar el registro del paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return(
        <div className="mx-3 my-7 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''} 
                <span className="font-normal normal-case">{nombre}</span>
            </p> 
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''} 
                <span className="font-normal normal-case">{propietario}</span>
            </p> 
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''} 
                <span className="font-normal normal-case">{email}</span>
            </p> 
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''} 
                <span className="font-normal normal-case">{fecha}</span>
            </p>   
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''} 
                <span className="font-normal normal-case">{sintomas}</span>
            </p> 
            <div className="flex justify-end">
                <button type="button" className="py-2 px-10 mr-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-full" onClick={() => setPaciente(paciente) /* Se agrega el arrow function para que haga el evento onclick, de no ser asi llamaria a la función directamente */}>Editar</button>
                <button type="button" className="py-2 px-10 bg-red-700 hover:bg-red-800 text-white font-bold uppercase rounded-full" onClick={handleEliminar}>Eliminar</button>
            </div>
        </div> 
    )
}

export default Paciente