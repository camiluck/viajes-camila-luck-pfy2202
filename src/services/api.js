// Cliente para la API REST mock (interceptada por MSW).
const BASE = `${import.meta.env.BASE_URL}api`

async function request(path) {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.mensaje || `Error ${res.status} al consultar la API`)
  }
  return res.json()
}

export const getDestinos = (continente) =>
  request(continente ? `/destinos?continente=${encodeURIComponent(continente)}` : '/destinos')

export const getDestino = (id) => request(`/destinos/${id}`)
