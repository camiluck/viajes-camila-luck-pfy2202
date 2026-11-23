import { http, graphql, HttpResponse, delay } from 'msw'
import { destinos, vuelos, hoteles } from './data'

// Agrega __typename (Apollo lo usa para normalizar la caché)
// y calcula el campo derivado "disponible".
const toVuelo = (v) => ({ __typename: 'Vuelo', ...v, disponible: v.asientosDisponibles > 0 })
const toHotel = (h) => ({ __typename: 'Hotel', ...h, disponible: h.habitacionesDisponibles > 0 })

export const handlers = [
  // ---------------- API REST ----------------

  // GET /api/destinos?continente=Europa  -> lista de destinos
  http.get('*/api/destinos', async ({ request }) => {
    await delay(500)
    const url = new URL(request.url)
    const continente = url.searchParams.get('continente')
    const resultado = continente
      ? destinos.filter((d) => d.continente === continente)
      : destinos
    return HttpResponse.json(resultado)
  }),

  // GET /api/destinos/:id -> un destino
  http.get('*/api/destinos/:id', async ({ params }) => {
    await delay(300)
    const destino = destinos.find((d) => d.id === params.id)
    if (!destino) {
      return HttpResponse.json({ mensaje: 'Destino no encontrado' }, { status: 404 })
    }
    return HttpResponse.json(destino)
  }),

  // ---------------- API GraphQL ----------------

  // query OpcionesViaje($destinoId: ID!, $soloDisponibles: Boolean)
  graphql.query('OpcionesViaje', async ({ variables }) => {
    await delay(600)
    const { destinoId, soloDisponibles = false } = variables
    const destino = destinos.find((d) => d.id === destinoId)

    if (!destino) {
      return HttpResponse.json({
        errors: [{ message: `No existe el destino con id ${destinoId}` }],
      })
    }

    let listaVuelos = vuelos.filter((v) => v.destinoId === destinoId).map(toVuelo)
    let listaHoteles = hoteles.filter((h) => h.destinoId === destinoId).map(toHotel)

    if (soloDisponibles) {
      listaVuelos = listaVuelos.filter((v) => v.disponible)
      listaHoteles = listaHoteles.filter((h) => h.disponible)
    }

    return HttpResponse.json({
      data: {
        vuelos: listaVuelos,
        hoteles: listaHoteles,
      },
    })
  }),

  // query OfertasVuelos($precioMaximo: Int) -> vuelos más baratos de todos los destinos
  graphql.query('OfertasVuelos', async ({ variables }) => {
    await delay(500)
    const { precioMaximo = Infinity } = variables
    const ofertas = vuelos
      .filter((v) => v.asientosDisponibles > 0 && v.precio <= precioMaximo)
      .sort((a, b) => a.precio - b.precio)
      .map((v) => {
        const d = destinos.find((x) => x.id === v.destinoId)
        return {
          ...toVuelo(v),
          destino: { __typename: 'Destino', id: d.id, nombre: d.nombre, pais: d.pais },
        }
      })
    return HttpResponse.json({ data: { ofertas } })
  }),
]
