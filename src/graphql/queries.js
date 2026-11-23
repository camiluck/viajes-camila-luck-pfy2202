import { gql } from '@apollo/client'

export const OPCIONES_VIAJE = gql`
  query OpcionesViaje($destinoId: ID!, $soloDisponibles: Boolean) {
    vuelos(destinoId: $destinoId, soloDisponibles: $soloDisponibles) {
      id
      aerolinea
      codigo
      origen
      fechaSalida
      fechaRegreso
      duracion
      escalas
      precio
      asientosDisponibles
      disponible
    }
    hoteles(destinoId: $destinoId, soloDisponibles: $soloDisponibles) {
      id
      nombre
      estrellas
      precioNoche
      disponibleDesde
      disponibleHasta
      habitacionesDisponibles
      disponible
      servicios
    }
  }
`

export const OFERTAS_VUELOS = gql`
  query OfertasVuelos($precioMaximo: Int) {
    ofertas(precioMaximo: $precioMaximo) {
      id
      aerolinea
      codigo
      fechaSalida
      fechaRegreso
      precio
      asientosDisponibles
      disponible
      destino {
        id
        nombre
        pais
        emoji
      }
    }
  }
`
