import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Destinos from './pages/Destinos'
import DestinoDetalle from './pages/DestinoDetalle'
import Ofertas from './pages/Ofertas'
import MiViaje from './pages/MiViaje'
import NoEncontrado from './pages/NoEncontrado'

// HashRouter: compatible con GitHub Pages (no hay 404 al recargar una ruta).
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="destinos" element={<Destinos />} />
          <Route path="destinos/:id" element={<DestinoDetalle />} />
          <Route path="ofertas" element={<Ofertas />} />
          <Route path="mi-viaje" element={<MiViaje />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
