import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'



function App() {
	const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
	const [pacientes, setPacientes] = useState(INITIAL)
	const [paciente, setPaciente] = useState({})


	useEffect( () => {
		console.log('Componente listo o cambio en pacientes')
		localStorage.setItem('pacientes' , JSON.stringify(pacientes))
		console.log( 'Pacientes LS agregando...' , localStorage.getItem('pacientes') )
	} ,[pacientes] )

	const eliminarPaciente = ( id ) => {
		console.log('Eliminando paciente ', id)
		const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id )
		console.log(pacientesActualizados)
		setPacientes(pacientesActualizados)
	}
	return (
		<div className='container mx-auto mt-20'>
			<Header />
			<div className="mt-12 flex" >
				<Formulario
					setPacientes={setPacientes} 
					pacientes={pacientes} 
					paciente={paciente} 
					setPaciente={setPaciente}

				/>
				<ListadoPacientes 
					pacientes={pacientes} 
					setPaciente={setPaciente} 
					eliminarPaciente={eliminarPaciente}/>
			</div>
		</div>
	)
}

export default App