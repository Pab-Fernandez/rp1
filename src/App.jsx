import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoDePacientes from './components/ListadoDePacientes'
import './index.css'

function App() {
const sumar= () => {
  console.log (2+3)
}
const resultado = sumar
  return (
    <div className="container mt-5 ">
    <Header/>
    <div className='mt-10 md:flex'>
    <Formulario/>
    <ListadoDePacientes/> 
    
    </div>
    </div>
  )
}

export default App
//? Reglas JSX Notas:
//SIEMPRE tiene que haber un return ()
//Si pide que cierre una etiqueta, pum se pona la barita al final />
// Siempre rodear los elementos en el nivel más alto. no puede haber varios
//Estos elementosse pueden englobar en uno solo. para no morir de divs
//Se usa el logo de rolling. <> y se cierra </>  (fragment)
//antes del return puede ir todo el JS que queramos, después solo en ternarios. 
