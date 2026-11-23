export default function Loader({ texto = 'Cargando...' }) {
  return (
    <div className="loader" role="status">
      <div className="loader__spinner" />
      <p>{texto}</p>
    </div>
  )
}
