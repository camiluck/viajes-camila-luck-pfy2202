import { Link } from 'react-router-dom'

export default function NoEncontrado() {
  return (
    <section className="vacio vacio--grande">
      <h1>404 · Página no encontrada</h1>
      <p>La ruta que buscas no existe.</p>
      <Link to="/" className="btn btn--primario">Volver al inicio</Link>
    </section>
  )
}
