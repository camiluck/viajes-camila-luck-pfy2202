import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { getDestinos } from '../services/api'
import DestinoCard from '../components/DestinoCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

export default function Inicio() {
  const { data: destinos, loading, error, reintentar } = useFetch(() => getDestinos())

  return (
    <>
      <section className="hero">
        <h1>Planifica tu próximo viaje en minutos</h1>
        <p>Elige un destino, compara vuelos y hoteles disponibles y arma tu plan con el precio total.</p>
        <div className="hero__acciones">
          <Link to="/destinos" className="btn btn--claro">Explorar destinos</Link>
          <Link to="/ofertas" className="btn btn--contorno">Ver ofertas de vuelos</Link>
        </div>
      </section>

      <section>
        <div className="seccion__titulo">
          <h2>Destinos destacados</h2>
          <Link to="/destinos">Ver todos →</Link>
        </div>
        {loading && <Loader texto="Cargando destinos..." />}
        {error && <ErrorMessage mensaje={error} onReintentar={reintentar} />}
        {destinos && (
          <div className="grilla">
            {destinos.slice(0, 3).map((d) => (
              <DestinoCard key={d.id} destino={d} />
            ))}
          </div>
        )}
      </section>

      <section className="pasos">
        <h2>¿Cómo funciona?</h2>
        <ol className="grilla grilla--pasos">
          <li className="card"><strong>1. Elige un destino</strong><p>Revisa país, clima y actividades populares.</p></li>
          <li className="card"><strong>2. Compara opciones</strong><p>Mira vuelos y hoteles con precios, fechas y disponibilidad.</p></li>
          <li className="card"><strong>3. Arma tu plan</strong><p>Selecciona vuelo y hotel y obtén el total estimado.</p></li>
        </ol>
      </section>
    </>
  )
}
