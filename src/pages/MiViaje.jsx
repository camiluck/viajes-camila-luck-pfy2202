import { Link } from 'react-router-dom'
import { useViaje } from '../context/ViajeContext'
import ResumenViaje from '../components/ResumenViaje'
import VueloCard from '../components/VueloCard'
import HotelCard from '../components/HotelCard'

export default function MiViaje() {
  const { plan } = useViaje()

  if (!plan.destino) {
    return (
      <section className="vacio vacio--grande">
        <h1>🧳 Tu viaje está vacío</h1>
        <p>Elige un destino y selecciona un vuelo y un hotel para armar tu plan.</p>
        <Link to="/destinos" className="btn btn--primario">Explorar destinos</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>Mi viaje a {plan.destino.nombre}</h1>
      <div className="detalle-layout">
        <div className="lista-opciones">
          <h2>Vuelo</h2>
          {plan.vuelo ? <VueloCard vuelo={plan.vuelo} /> : <p className="vacio">Todavía no eliges vuelo.</p>}
          <h2>Hotel</h2>
          {plan.hotel ? <HotelCard hotel={plan.hotel} /> : <p className="vacio">Todavía no eliges hotel.</p>}
        </div>
        <ResumenViaje />
      </div>
    </section>
  )
}
