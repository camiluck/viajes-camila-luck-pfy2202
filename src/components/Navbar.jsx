import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useViaje } from '../context/ViajeContext'

const enlaces = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/destinos', label: 'Destinos' },
  { to: '/ofertas', label: 'Ofertas de vuelos' },
  { to: '/mi-viaje', label: 'Mi viaje' },
]

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const { plan } = useViaje()
  const items = (plan.vuelo ? 1 : 0) + (plan.hotel ? 1 : 0)

  return (
    <header className="navbar">
      <div className="contenedor navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setAbierto(false)}>
          ✈️ <span>ViajaFácil</span>
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto((a) => !a)}
        >
          ☰
        </button>

        <nav className={`navbar__links ${abierto ? 'abierto' : ''}`}>
          {enlaces.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} onClick={() => setAbierto(false)}>
              {label}
              {to === '/mi-viaje' && items > 0 && <span className="contador">{items}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
