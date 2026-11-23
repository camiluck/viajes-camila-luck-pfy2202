import { Link } from 'react-router-dom'
import { useViaje } from '../context/ViajeContext'
import { formatoCLP } from '../utils/format'

// Panel con el plan de viaje actual. "compacto" se usa en la página de detalle.
export default function ResumenViaje({ compacto = false }) {
  const { plan, total, cambiarNoches, limpiarPlan } = useViaje()
  const { destino, vuelo, hotel, noches = 7 } = plan

  if (!destino) {
    return (
      <aside className="card resumen">
        <h3>🧳 Tu viaje</h3>
        <p className="texto-suave">Aún no has elegido vuelo ni hotel.</p>
      </aside>
    )
  }

  return (
    <aside className="card resumen">
      <h3>🧳 Tu viaje a {destino.nombre}</h3>
      <ul className="resumen__lista">
        <li>
          <span>✈️ Vuelo</span>
          <span>{vuelo ? `${vuelo.aerolinea} ${vuelo.codigo}` : 'Sin elegir'}</span>
          <strong>{vuelo ? formatoCLP(vuelo.precio) : '—'}</strong>
        </li>
        <li>
          <span>🏨 Hotel</span>
          <span>{hotel ? hotel.nombre : 'Sin elegir'}</span>
          <strong>{hotel ? formatoCLP(hotel.precioNoche * noches) : '—'}</strong>
        </li>
      </ul>

      <label className="resumen__noches">
        Noches de hotel
        <input
          type="number"
          min="1"
          max="30"
          value={noches}
          onChange={(e) => cambiarNoches(Math.min(30, Math.max(1, Number(e.target.value) || 1)))}
        />
      </label>

      <div className="resumen__total">
        <span>Total estimado</span>
        <strong>{formatoCLP(total)}</strong>
      </div>

      <div className="resumen__acciones">
        {compacto ? (
          <Link to="/mi-viaje" className="btn btn--primario btn--bloque">Ver mi viaje</Link>
        ) : (
          <Link to={`/destinos/${destino.id}`} className="btn btn--secundario btn--bloque">Modificar selección</Link>
        )}
        <button className="btn btn--texto" onClick={limpiarPlan}>Vaciar plan</button>
      </div>
    </aside>
  )
}
