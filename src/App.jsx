import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/inicio'
import Gestion from './pages/gestion'
import DatosAPI from './pages/datos_api'
import Barra from './components/barra'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Barra />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/gestion" element={<Gestion />} />
          <Route path="/datos_api" element={<DatosAPI />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
