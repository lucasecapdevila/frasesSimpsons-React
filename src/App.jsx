import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Frase from './components/Frase'
import { Button } from 'react-bootstrap'

function App() {

  return (
    <>
      <main className='d-flex flex-column justify-content-center align-items-center my-4'>
        <div>
          <img className='img-fluid' src="../public/logosimpson.png" alt="Logo de Los Simpson" />
        </div>

        <Frase/>

        <Button variant='success' className='mt-2'>Obtener frase</Button>
      </main>
    </>
  )
}

export default App
