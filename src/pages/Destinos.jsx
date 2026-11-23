import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { getDestinos } from '../services/api'
import DestinoCard from '../components/DestinoCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

const CONTINENTES = ['Todos', 'América', 'Europa', 'Asia']

export default function Destinos() {
  // El filtro de continente vive en la URL (?continente=Europa) y se envía a la API REST
  const [searchParams, setSearchParams] = useSearchParams()
  const continente = searchParams.get('continente') || 'Todos'
  const [busqueda, setBusqueda] = useState('')

  const { data, loading, error, reintentar } = useFetch(
    () => getDestinos(continente === 'Todos' ? undefined : continente),
    [continente],
  )

  // Búsqueda local por nombre, país o actividad
  const destinos = useMemo(() => {
    if (!data) return []
    const q = busqueda.trim().toLowerCase()
    if (!q) return data
    return data.filter(
      (d) =>
        d.nombre.toLowerCase().includes(q) ||
        d.pais.toLowerCase().includes(q) ||
        d.actividades.some((a) => a.toLowerCase().includes(q)),
    )
  }, [data, busqueda])

  const cambiarContinente = (c) => setSearchParams(c === 'Todos' ? {} : { continente: c })

  return (
    <section>
      <h1>Destinos disponibles</h1>
      <p className="texto-suave">Información obtenida desde la API REST mock (<code>GET /api/destinos</code>).</p>

      <div className="filtros">
        <input
          type="search"
          placeholder="Buscar por destino, país o actividad..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          aria-label="Buscar destino"
        />
        <div className="filtros__botones" role="group" aria-label="Filtrar por continente">
          {CONTINENTES.map((c) => (
            <button
              key={c}
              className={`btn btn--filtro ${continente === c ? 'activo' : ''}`}
              onClick={() => cambiarContinente(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {loading && <Loader texto="Cargando destinos..." />}
      {error && <ErrorMessage mensaje={error} onReintentar={reintentar} />}
      {!loading && !error && destinos.length === 0 && (
        <p className="vacio">No se encontraron destinos para tu búsqueda.</p>
      )}
      {!loading && !error && (
        <div className="grilla">
          {destinos.map((d) => (
            <DestinoCard key={d.id} destino={d} />
          ))}
        </div>
      )}
    </section>
  )
}
