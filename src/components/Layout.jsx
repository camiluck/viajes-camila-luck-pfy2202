import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  // Vuelve arriba al cambiar de página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app">
      <Navbar />
      <main className="contenedor main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
