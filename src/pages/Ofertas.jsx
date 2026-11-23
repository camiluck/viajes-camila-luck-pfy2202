import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { OFERTAS_VUELOS } from '../graphql/queries'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import { formatoCLP, formatoFecha } from '../utils/format'

const TOPES = [
  { valor: 300000, label: 'Hasta $300.000' },
  { valor: 1000000, label: 'Hasta $1.000.000' },
  { valor: null, label: 'Todos' },
]

export default function Ofertas() {
  const [precioMaximo, setPrecioMaximo] = useState(null)
  const { data, loading, error, refetch } = useQuery(OFERTAS_VUELOS, {
    variables: precioMaximo ? { precioMaximo } : {},
  })

  return (
    <section>
      <h1>Ofertas de vuelos</h1>
      <p className="texto-suave">Vuelos con asientos disponibles, ordenados por precio (consulta GraphQL <code>OfertasVuelos</code>).</p>

      <div className="filtros__botones">
        {TOPES.map((t) => (
          <button
            key={t.label}
            className={`btn btn--filtro ${precioMaximo === t.valor ? 'activo' : ''}`}
            onClick={() => setPrecioMaximo(t.valor)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {loading && <Loader texto="Buscando ofertas..." />}
      {error && <ErrorMessage mensaje={error.message} onReintentar={() => refetch()} />}

      {data && (
        <div className="tabla-wrapper">
          <table className="tabla">
            <thead>
              <tr>
                <th>Destino</th>
                <th>Aerolínea</th>
                <th>Fechas</th>
                <th>Asientos</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.ofertas.map((o) => (
                <tr key={o.id}>
                  <td data-label="Destino">{o.destino.emoji} {o.destino.nombre}, {o.destino.pais}</td>
                  <td data-label="Aerolínea">{o.aerolinea} {o.codigo}</td>
                  <td data-label="Fechas">{formatoFecha(o.fechaSalida)} – {formatoFecha(o.fechaRegreso)}</td>
                  <td data-label="Asientos">{o.asientosDisponibles}</td>
                  <td data-label="Precio"><strong>{formatoCLP(o.precio)}</strong></td>
                  <td><Link to={`/destinos/${o.destino.id}`} className="btn btn--secundario btn--chico">Ver destino</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
          {data.ofertas.length === 0 && <p className="vacio">No hay ofertas en ese rango de precio.</p>}
        </div>
      )}
    </section>
  )
}
