import Badge from './Badge'
import Estrellas from './Estrellas'
import { formatoCLP, formatoFecha } from '../utils/format'

export default function HotelCard({ hotel, seleccionado, onSeleccionar }) {
  const { nombre, estrellas, precioNoche, disponibleDesde, disponibleHasta, habitacionesDisponibles, disponible, servicios } = hotel

  return (
    <article className={`card opcion ${seleccionado ? 'opcion--seleccionada' : ''} ${!disponible ? 'opcion--agotada' : ''}`}>
      <div className="opcion__cabecera">
        <div>
          <h4>{nombre}</h4>
          <Estrellas cantidad={estrellas} />
        </div>
        <Badge disponible={disponible} cantidad={habitacionesDisponibles} unidad="habitaciones" />
      </div>
      <p className="texto-suave">
        📅 Disponible del {formatoFecha(disponibleDesde)} al {formatoFecha(disponibleHasta)}
      </p>
      <ul className="lista-chips">
        {servicios.map((s) => (
          <li key={s} className="chip">{s}</li>
        ))}
      </ul>
      <div className="opcion__pie">
        <div>
          <strong className="precio">{formatoCLP(precioNoche)}</strong>
          <span className="texto-suave"> / noche</span>
        </div>
        {onSeleccionar && (
          <button className="btn btn--primario" disabled={!disponible} onClick={() => onSeleccionar(hotel)}>
            {seleccionado ? '✓ Seleccionado' : 'Elegir hotel'}
          </button>
        )}
      </div>
    </article>
  )
}
