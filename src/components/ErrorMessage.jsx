export default function ErrorMessage({ mensaje, onReintentar }) {
  return (
    <div className="error" role="alert">
      <p>⚠️ {mensaje}</p>
      {onReintentar && (
        <button className="btn btn--secundario" onClick={onReintentar}>
          Reintentar
        </button>
      )}
    </div>
  )
}
