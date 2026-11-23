import { createContext, useContext, useEffect, useState } from 'react'

// Guarda el plan de viaje (destino + vuelo + hotel + noches)
// para que esté disponible en todas las páginas.
const ViajeContext = createContext(null)

const CLAVE = 'plan-viaje'

function leerPlanGuardado() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) || {}
  } catch {
    return {}
  }
}

export function ViajeProvider({ children }) {
  const [plan, setPlan] = useState(leerPlanGuardado)

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(plan))
    } catch {
      /* localStorage no disponible: el plan vive solo en memoria */
    }
  }, [plan])

  const seleccionarVuelo = (destino, vuelo) =>
    setPlan((p) => (p.destino?.id === destino.id ? { ...p, vuelo } : { destino, vuelo, noches: 7 }))

  const seleccionarHotel = (destino, hotel) =>
    setPlan((p) =>
      p.destino?.id === destino.id ? { ...p, hotel } : { destino, hotel, noches: p.noches || 7 },
    )

  const cambiarNoches = (noches) => setPlan((p) => ({ ...p, noches }))
  const limpiarPlan = () => setPlan({})

  const total =
    (plan.vuelo?.precio || 0) + (plan.hotel ? plan.hotel.precioNoche * (plan.noches || 1) : 0)

  return (
    <ViajeContext.Provider
      value={{ plan, total, seleccionarVuelo, seleccionarHotel, cambiarNoches, limpiarPlan }}
    >
      {children}
    </ViajeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useViaje = () => useContext(ViajeContext)
