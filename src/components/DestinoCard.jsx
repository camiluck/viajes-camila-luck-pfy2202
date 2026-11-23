import { Link } from 'react-router-dom'

export default function DestinoCard({ destino }) {
  const { id, nombre, pais, continente, emoji, color, descripcion, actividades } = destino
  return (
    <article className="card destino-card">
      <div className="destino-card__portada" style={{ background: color }}>
        <span className="destino-card__emoji">{emoji}</span>
        <span className="chip chip--claro">{continente}</span>
      </div>
      <div className="card__cuerpo">
        <h3>{nombre}</h3>
        <p className="texto-suave">📍 {pais}</p>
        <p>{descripcion}</p>
        <h4>Actividades populares</h4>
        <ul className="lista-chips">
          {actividades.map((a) => (
            <li key={a} className="chip">{a}</li>
          ))}
        </ul>
      </div>
      <div className="card__pie">
        <Link to={`/destinos/${id}`} className="btn btn--primario btn--bloque">
          Ver vuelos y hoteles
        </Link>
      </div>
    </article>
  )
}
