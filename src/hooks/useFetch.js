import { useEffect, useState } from 'react'

/**
 * Hook reutilizable para consumir la API REST.
 * Recibe una función que retorna una promesa y la lista de dependencias.
 */
export function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    let cancelado = false
    setLoading(true)
    setError(null)

    fetcher()
      .then((res) => {
        if (!cancelado) setData(res)
      })
      .catch((err) => {
        if (!cancelado) setError(err.message)
      })
      .finally(() => {
        if (!cancelado) setLoading(false)
      })

    return () => {
      cancelado = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, intento])

  const reintentar = () => setIntento((n) => n + 1)

  return { data, loading, error, reintentar }
}
