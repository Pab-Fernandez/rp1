const Paciente = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded py-10 px-5">
        <p className="block text-gray-80 uppercase font-bold">
          Nombre: {""}
          <span className=" font-normal normal-case">Zookie</span>
        </p>
      </div>
      <div className="bg-white shadow-md rounded py-10 px-5">
        <p className="block text-gray-80 uppercase font-bold">
          Propietario: {""}
          <span className=" font-normal normal-case">Golfo Aurelio</span>
        </p>
      </div>
      <div className="bg-white shadow-md rounded py-10 px-5">
        <p className="block text-gray-80 uppercase font-bold">
          Mail: {""}
          <span className=" font-normal normal-case">golfower@gmail.com</span>
        </p>
      </div>
      <div className="bg-white shadow-md rounded py-10 px-5">
        <p className="block text-gray-80 uppercase font-bold">
          Fecha alta: {""}
          <span className=" font-normal normal-case">10/4/23</span>
        </p>
      </div>
      <div className="bg-white shadow-md rounded py-10 px-5">
        <p className="block text-gray-80 uppercase font-bold">
          Sintomas: {""}
          <span className=" font-normal normal-case">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, unde
            minima minus molestias quos voluptates impedit vero tempora,
            doloribus laboriosam dolor quisquam ipsa possimus laudantium
            doloremque sunt enim id provident.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Paciente;
