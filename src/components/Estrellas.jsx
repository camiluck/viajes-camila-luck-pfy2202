export default function Estrellas({ cantidad }) {
  return (
    <span className="estrellas" aria-label={`${cantidad} estrellas`}>
      {'★'.repeat(cantidad)}
      <span className="estrellas__vacias">{'★'.repeat(5 - cantidad)}</span>
    </span>
  )
}
