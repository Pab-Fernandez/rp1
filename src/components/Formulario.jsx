import {useState, useEffect} from 'react';

const Formulario = () => {
  const [nombre, setNombre] =  useState ('');
  const [propietario, setPropietario] =  useState ('');
  const [email, setEmail] =  useState ('');
  const [fecha, setFecha] =  useState ('');
  const [sintomas, setSintomas] =  useState ('');
  const handleSubmit = (e) => {
    e.preventDefault ();
    console.log ('Enviando formulario')

  }



  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className=" font-black text-3xl text-center">Seguimiento de Pacientes</h2>
    <p className="text-lg mt-3 mb-6 text-center">
      Añadir pacientes y {''}
      <span className="font-bold text-red-950">Administrar</span>
          </p>
  <form
  onSubmit={handleSubmit}
   className="bg-white shadow-md rounded py-10 px-5">
    <div className="mb-5">
      <label htmlFor="paciente" className="block text-gray-80 uppercase font-bold">Nombre paciente</label>
      <input
      id= "paciente" 
      type="text"
      placeholder="Nombre del paciente"
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
      value= {nombre}
      onChange= { (e) => setNombre(e.target.value)}    
      />
    </div>
    <div className="mb-5">
      <label htmlFor="propietario" className="block text-gray-80 uppercase font-bold">Nombre Propietario</label>
      <input
      id= "propietario" 
      type="text"
      placeholder="Nombre del humano"
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
      value= {propietario}
      onChange= { (e) => setPropietario(e.target.value)}       
      />
    </div>
    <div className="mb-5">
      <label htmlFor="mail" className="block text-gray-80 uppercase font-bold">mail de contacto</label>
      <input
      id= "mail" 
      type="email"
      placeholder="mail de contacto"
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
      value= {email}
      onChange= { (e) => setEmail(e.target.value)}   
      />
    </div>
    <div className="mb-5">
      <label htmlFor="alta" className="block text-gray-80 uppercase font-bold">fecha de alta</label>
      <input
      id= "alta" 
      type="date"
      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded"
      value= {fecha}
      onChange= { (e) => setFecha(e.target.value)}   
      />
    </div>
    <div className="mb-5">
    <label htmlFor= "sintomas" className="block text-gray-80 uppercase font-bold">
      Sintomas</label>
    <textarea
     id="sintomas"    
     placeholder="descripción del caso"
     className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded" 
     value= {sintomas}
     onChange= { (e) => setSintomas(e.target.value)}   
     />
      
    </div>
    <input 
    type="submit" 
    className="w-full bg-red-950 text-gray-200 p-2 rounded 
    font-semibold hover:bg-red-800 transition-opacity mb-5"
    value="Ingresar"/>

  </form>
    </div>
  );
}

export default Formulario;
