import Paciente from "./Paciente";

const ListadoDePacientes = () => {
    return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        
        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
        <p className="text-lg mt-3 mb-6 text-center"> Administra tus {''}
          <span className="font-bold text-red-950">Pacientes y Turnos</span>
        </p>
        <div>
        <Paciente/>        
        <Paciente/>        
        <Paciente/>
        </div>
    </div>
    );
  }
  
  export default ListadoDePacientes;
  