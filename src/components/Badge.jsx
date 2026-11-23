// Etiqueta de disponibilidad reutilizable (vuelos y hoteles)
export default function Badge({ disponible, cantidad, unidad }) {
  if (!disponible) return <span className="badge badge--agotado">Agotado</span>
  const pocos = cantidad <= 5
  return (
    <span className={`badge ${pocos ? 'badge--pocos' : 'badge--ok'}`}>
      {pocos ? `¡Quedan ${cantidad} ${unidad}!` : `${cantidad} ${unidad} disponibles`}
    </span>
  )
}
