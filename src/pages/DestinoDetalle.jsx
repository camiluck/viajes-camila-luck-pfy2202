import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { useFetch } from '../hooks/useFetch'
import { getDestino } from '../services/api'
import { OPCIONES_VIAJE } from '../graphql/queries'
import { useViaje } from '../context/ViajeContext'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import VueloCard from '../components/VueloCard'
import HotelCard from '../components/HotelCard'
import ResumenViaje from '../components/ResumenViaje'

export default function DestinoDetalle() {
  const { id } = useParams()
  const [pestana, setPestana] = useState('vuelos')
  const [soloDisponibles, setSoloDisponibles] = useState(false)
  const { plan, seleccionarVuelo, seleccionarHotel } = useViaje()

  // 1) Info general del destino -> REST
  const { data: destino, loading: cargandoDestino, error: errorDestino } = useFetch(() => getDestino(id), [id])

  // 2) Vuelos y hoteles del destino -> GraphQL
  const { data, loading, error, refetch } = useQuery(OPCIONES_VIAJE, {
    variables: { destinoId: id, soloDisponibles },
    skip: !destino,
  })

  if (cargandoDestino) return <Loader texto="Cargando destino..." />
  if (errorDestino)
    return (
      <>
        <ErrorMessage mensaje={errorDestino} />
        <Link to="/destinos" className="btn btn--secundario">← Volver a destinos</Link>
      </>
    )

  const esEsteDestino = plan.destino?.id === destino.id
  const resumenDestino = { id: destino.id, nombre: destino.nombre, pais: destino.pais }

  return (
    <>
      <Link to="/destinos" className="volver">← Todos los destinos</Link>

      <section className="detalle-hero" style={{ background: destino.color }}>
        <img src={destino.imagen} alt={destino.imagenAlt} className="foto-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
        <div className="detalle-hero__texto">
          <h1>{destino.nombre}</h1>
          <p>📍 {destino.pais} · {destino.continente}</p>
        </div>
        <small className="detalle-hero__credito">Foto: {destino.credito} · Wikimedia Commons</small>
      </section>

      <section className="detalle-info">
        <p>{destino.descripcion}</p>
        <ul className="detalle-info__datos">
          <li><span>Clima</span>{destino.clima}</li>
          <li><span>Moneda</span>{destino.moneda}</li>
        </ul>
        <h3>Actividades populares</h3>
        <ul className="lista-chips">
          {destino.actividades.map((a) => <li key={a} className="chip">{a}</li>)}
        </ul>
      </section>

      <div className="detalle-layout">
        <section>
          <div className="pestanas" role="tablist">
            <button role="tab" aria-selected={pestana === 'vuelos'} className={pestana === 'vuelos' ? 'activa' : ''} onClick={() => setPestana('vuelos')}>
              ✈️ Vuelos {data && `(${data.vuelos.length})`}
            </button>
            <button role="tab" aria-selected={pestana === 'hoteles'} className={pestana === 'hoteles' ? 'activa' : ''} onClick={() => setPestana('hoteles')}>
              🏨 Hoteles {data && `(${data.hoteles.length})`}
            </button>
          </div>

          <label className="check">
            <input type="checkbox" checked={soloDisponibles} onChange={(e) => setSoloDisponibles(e.target.checked)} />
            Mostrar solo opciones con disponibilidad
          </label>

          {loading && <Loader texto="Consultando vuelos y hoteles (GraphQL)..." />}
          {error && <ErrorMessage mensaje={error.message} onReintentar={() => refetch()} />}

          {data && pestana === 'vuelos' && (
            <div className="lista-opciones">
              {data.vuelos.length === 0 && <p className="vacio">No hay vuelos disponibles para este destino.</p>}
              {data.vuelos.map((v) => (
                <VueloCard
                  key={v.id}
                  vuelo={v}
                  seleccionado={esEsteDestino && plan.vuelo?.id === v.id}
                  onSeleccionar={(vuelo) => seleccionarVuelo(resumenDestino, vuelo)}
                />
              ))}
            </div>
          )}

          {data && pestana === 'hoteles' && (
            <div className="lista-opciones">
              {data.hoteles.length === 0 && <p className="vacio">No hay hoteles disponibles para este destino.</p>}
              {data.hoteles.map((h) => (
                <HotelCard
                  key={h.id}
                  hotel={h}
                  seleccionado={esEsteDestino && plan.hotel?.id === h.id}
                  onSeleccionar={(hotel) => seleccionarHotel(resumenDestino, hotel)}
                />
              ))}
            </div>
          )}
        </section>

        <ResumenViaje compacto />
      </div>
    </>
  )
}
