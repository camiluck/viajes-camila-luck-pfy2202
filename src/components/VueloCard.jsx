import Badge from './Badge'
import { formatoCLP, formatoFecha } from '../utils/format'

export default function VueloCard({ vuelo, seleccionado, onSeleccionar }) {
  const { aerolinea, codigo, origen, fechaSalida, fechaRegreso, duracion, escalas, precio, asientosDisponibles, disponible } = vuelo

  return (
    <article className={`card opcion ${seleccionado ? 'opcion--seleccionada' : ''} ${!disponible ? 'opcion--agotada' : ''}`}>
      <div className="opcion__cabecera">
        <div>
          <h4>{aerolinea}</h4>
          <span className="texto-suave">Vuelo {codigo}</span>
        </div>
        <Badge disponible={disponible} cantidad={asientosDisponibles} unidad="asientos" />
      </div>
      <ul className="opcion__datos">
        <li><span>Origen</span>{origen}</li>
        <li><span>Ida</span>{formatoFecha(fechaSalida)}</li>
        <li><span>Regreso</span>{formatoFecha(fechaRegreso)}</li>
        <li><span>Duración</span>{duracion} · {escalas === 0 ? 'Directo' : `${escalas} escala${escalas > 1 ? 's' : ''}`}</li>
      </ul>
      <div className="opcion__pie">
        <div>
          <strong className="precio">{formatoCLP(precio)}</strong>
          <span className="texto-suave"> ida y vuelta</span>
        </div>
        {onSeleccionar && (
          <button className="btn btn--primario" disabled={!disponible} onClick={() => onSeleccionar(vuelo)}>
            {seleccionado ? '✓ Seleccionado' : 'Elegir vuelo'}
          </button>
        )}
      </div>
    </article>
  )
}
