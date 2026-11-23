// Datos simulados del "backend" de la agencia de viajes.
// Los destinos se exponen por REST y los vuelos/hoteles por GraphQL.

export const destinos = [
  {
    id: '1',
    nombre: 'Cusco',
    pais: 'Perú',
    continente: 'América',
    emoji: '🏔️',
    color: '#b45309',
    clima: 'Templado de montaña',
    moneda: 'Sol peruano (PEN)',
    descripcion:
      'Antigua capital del Imperio Inca y puerta de entrada a Machu Picchu, con calles coloniales y paisajes andinos.',
    actividades: ['Visitar Machu Picchu', 'Valle Sagrado', 'Montaña de Colores', 'Gastronomía andina'],
  },
  {
    id: '2',
    nombre: 'Cancún',
    pais: 'México',
    continente: 'América',
    emoji: '🏖️',
    color: '#0891b2',
    clima: 'Tropical',
    moneda: 'Peso mexicano (MXN)',
    descripcion:
      'Playas de arena blanca y mar turquesa en el Caribe mexicano, cerca de ruinas mayas y cenotes.',
    actividades: ['Snorkel en arrecifes', 'Nadar en cenotes', 'Chichén Itzá', 'Isla Mujeres'],
  },
  {
    id: '3',
    nombre: 'Madrid',
    pais: 'España',
    continente: 'Europa',
    emoji: '🏛️',
    color: '#be123c',
    clima: 'Mediterráneo continental',
    moneda: 'Euro (EUR)',
    descripcion:
      'Capital vibrante con museos de clase mundial, plazas históricas y una vida nocturna inigualable.',
    actividades: ['Museo del Prado', 'Parque del Retiro', 'Tapas en La Latina', 'Palacio Real'],
  },
  {
    id: '4',
    nombre: 'Tokio',
    pais: 'Japón',
    continente: 'Asia',
    emoji: '🗼',
    color: '#7c3aed',
    clima: 'Subtropical húmedo',
    moneda: 'Yen (JPY)',
    descripcion:
      'Metrópolis donde conviven templos milenarios, tecnología de punta y una gastronomía extraordinaria.',
    actividades: ['Templo Senso-ji', 'Cruce de Shibuya', 'Mercado de Tsukiji', 'Excursión al Monte Fuji'],
  },
  {
    id: '5',
    nombre: 'Torres del Paine',
    pais: 'Chile',
    continente: 'América',
    emoji: '🌄',
    color: '#15803d',
    clima: 'Frío patagónico',
    moneda: 'Peso chileno (CLP)',
    descripcion:
      'Parque nacional de la Patagonia con macizos de granito, glaciares y lagos de colores intensos.',
    actividades: ['Trekking W', 'Glaciar Grey', 'Avistamiento de pumas', 'Kayak en lagos'],
  },
  {
    id: '6',
    nombre: 'Roma',
    pais: 'Italia',
    continente: 'Europa',
    emoji: '🍝',
    color: '#c2410c',
    clima: 'Mediterráneo',
    moneda: 'Euro (EUR)',
    descripcion:
      'La Ciudad Eterna: historia en cada esquina, arte renacentista y la mejor pasta del mundo.',
    actividades: ['Coliseo', 'Ciudad del Vaticano', 'Fontana di Trevi', 'Clase de cocina italiana'],
  },
]

// Vuelos desde Santiago (SCL). Precios en CLP por persona, ida y vuelta.
export const vuelos = [
  { id: 'v1', destinoId: '1', aerolinea: 'LATAM', codigo: 'LA2045', origen: 'Santiago (SCL)', fechaSalida: '2027-01-10', fechaRegreso: '2027-01-17', duracion: '3h 50m', escalas: 1, precio: 389000, asientosDisponibles: 12 },
  { id: 'v2', destinoId: '1', aerolinea: 'Sky Airline', codigo: 'H2514', origen: 'Santiago (SCL)', fechaSalida: '2027-02-03', fechaRegreso: '2027-02-10', duracion: '4h 20m', escalas: 1, precio: 312000, asientosDisponibles: 0 },
  { id: 'v3', destinoId: '1', aerolinea: 'JetSMART', codigo: 'JA782', origen: 'Santiago (SCL)', fechaSalida: '2027-03-14', fechaRegreso: '2027-03-21', duracion: '5h 05m', escalas: 1, precio: 279000, asientosDisponibles: 5 },

  { id: 'v4', destinoId: '2', aerolinea: 'Aeroméxico', codigo: 'AM011', origen: 'Santiago (SCL)', fechaSalida: '2027-01-20', fechaRegreso: '2027-01-30', duracion: '9h 30m', escalas: 1, precio: 845000, asientosDisponibles: 8 },
  { id: 'v5', destinoId: '2', aerolinea: 'Copa Airlines', codigo: 'CM460', origen: 'Santiago (SCL)', fechaSalida: '2027-02-15', fechaRegreso: '2027-02-25', duracion: '10h 15m', escalas: 1, precio: 760000, asientosDisponibles: 20 },

  { id: 'v6', destinoId: '3', aerolinea: 'Iberia', codigo: 'IB6830', origen: 'Santiago (SCL)', fechaSalida: '2027-04-05', fechaRegreso: '2027-04-19', duracion: '13h 10m', escalas: 0, precio: 1150000, asientosDisponibles: 15 },
  { id: 'v7', destinoId: '3', aerolinea: 'LATAM', codigo: 'LA704', origen: 'Santiago (SCL)', fechaSalida: '2027-05-10', fechaRegreso: '2027-05-24', duracion: '13h 05m', escalas: 0, precio: 1230000, asientosDisponibles: 3 },
  { id: 'v8', destinoId: '3', aerolinea: 'Air Europa', codigo: 'UX046', origen: 'Santiago (SCL)', fechaSalida: '2027-06-01', fechaRegreso: '2027-06-15', duracion: '15h 40m', escalas: 1, precio: 980000, asientosDisponibles: 0 },

  { id: 'v9', destinoId: '4', aerolinea: 'Qatar Airways', codigo: 'QR774', origen: 'Santiago (SCL)', fechaSalida: '2027-03-22', fechaRegreso: '2027-04-08', duracion: '32h 20m', escalas: 2, precio: 1890000, asientosDisponibles: 9 },
  { id: 'v10', destinoId: '4', aerolinea: 'Delta', codigo: 'DL146', origen: 'Santiago (SCL)', fechaSalida: '2027-04-12', fechaRegreso: '2027-04-28', duracion: '28h 45m', escalas: 1, precio: 2050000, asientosDisponibles: 4 },

  { id: 'v11', destinoId: '5', aerolinea: 'LATAM', codigo: 'LA97', origen: 'Santiago (SCL)', fechaSalida: '2027-01-05', fechaRegreso: '2027-01-12', duracion: '3h 25m', escalas: 0, precio: 245000, asientosDisponibles: 18 },
  { id: 'v12', destinoId: '5', aerolinea: 'Sky Airline', codigo: 'H2291', origen: 'Santiago (SCL)', fechaSalida: '2027-02-08', fechaRegreso: '2027-02-15', duracion: '3h 30m', escalas: 0, precio: 198000, asientosDisponibles: 7 },
  { id: 'v13', destinoId: '5', aerolinea: 'JetSMART', codigo: 'JA171', origen: 'Santiago (SCL)', fechaSalida: '2027-03-01', fechaRegreso: '2027-03-08', duracion: '3h 35m', escalas: 0, precio: 165000, asientosDisponibles: 0 },

  { id: 'v14', destinoId: '6', aerolinea: 'ITA Airways', codigo: 'AZ681', origen: 'Santiago (SCL)', fechaSalida: '2027-05-18', fechaRegreso: '2027-06-01', duracion: '16h 30m', escalas: 1, precio: 1180000, asientosDisponibles: 11 },
  { id: 'v15', destinoId: '6', aerolinea: 'Air France', codigo: 'AF401', origen: 'Santiago (SCL)', fechaSalida: '2027-06-10', fechaRegreso: '2027-06-24', duracion: '17h 15m', escalas: 1, precio: 1095000, asientosDisponibles: 6 },
]

// Hoteles por destino. Precio en CLP por noche.
export const hoteles = [
  { id: 'h1', destinoId: '1', nombre: 'Casa Andina Premium', estrellas: 4, precioNoche: 98000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-03-31', habitacionesDisponibles: 6, servicios: ['Wifi', 'Desayuno', 'Oxígeno en habitación'] },
  { id: 'h2', destinoId: '1', nombre: 'Hostal Plaza de Armas', estrellas: 2, precioNoche: 35000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-12-31', habitacionesDisponibles: 0, servicios: ['Wifi', 'Tours'] },
  { id: 'h3', destinoId: '1', nombre: 'Belmond Monasterio', estrellas: 5, precioNoche: 320000, disponibleDesde: '2027-02-01', disponibleHasta: '2027-06-30', habitacionesDisponibles: 2, servicios: ['Spa', 'Restaurante', 'Desayuno', 'Wifi'] },

  { id: 'h4', destinoId: '2', nombre: 'Grand Oasis Cancún', estrellas: 5, precioNoche: 210000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-04-30', habitacionesDisponibles: 14, servicios: ['Todo incluido', 'Piscina', 'Playa privada'] },
  { id: 'h5', destinoId: '2', nombre: 'Hotel Xbalamqué', estrellas: 3, precioNoche: 72000, disponibleDesde: '2027-01-15', disponibleHasta: '2027-12-15', habitacionesDisponibles: 9, servicios: ['Piscina', 'Wifi', 'Desayuno'] },

  { id: 'h6', destinoId: '3', nombre: 'Hotel Riu Plaza España', estrellas: 4, precioNoche: 145000, disponibleDesde: '2027-03-01', disponibleHasta: '2027-09-30', habitacionesDisponibles: 10, servicios: ['Terraza panorámica', 'Piscina', 'Wifi'] },
  { id: 'h7', destinoId: '3', nombre: 'Hostal Sol Madrid', estrellas: 2, precioNoche: 48000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-12-31', habitacionesDisponibles: 4, servicios: ['Wifi'] },

  { id: 'h8', destinoId: '4', nombre: 'Park Hyatt Tokyo', estrellas: 5, precioNoche: 480000, disponibleDesde: '2027-03-01', disponibleHasta: '2027-05-31', habitacionesDisponibles: 3, servicios: ['Spa', 'Gimnasio', 'Vista panorámica'] },
  { id: 'h9', destinoId: '4', nombre: 'Capsule Inn Shinjuku', estrellas: 2, precioNoche: 32000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-12-31', habitacionesDisponibles: 25, servicios: ['Wifi', 'Baño público'] },
  { id: 'h10', destinoId: '4', nombre: 'Hotel Gracery Shinjuku', estrellas: 3, precioNoche: 95000, disponibleDesde: '2027-02-01', disponibleHasta: '2027-08-31', habitacionesDisponibles: 0, servicios: ['Wifi', 'Restaurante'] },

  { id: 'h11', destinoId: '5', nombre: 'EcoCamp Patagonia', estrellas: 4, precioNoche: 260000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-04-15', habitacionesDisponibles: 5, servicios: ['Domos geodésicos', 'Pensión completa', 'Excursiones'] },
  { id: 'h12', destinoId: '5', nombre: 'Refugio Las Torres', estrellas: 2, precioNoche: 85000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-04-30', habitacionesDisponibles: 0, servicios: ['Camarotes', 'Cena'] },

  { id: 'h13', destinoId: '6', nombre: 'Hotel Artemide', estrellas: 4, precioNoche: 175000, disponibleDesde: '2027-04-01', disponibleHasta: '2027-10-31', habitacionesDisponibles: 7, servicios: ['Spa', 'Desayuno', 'Wifi'] },
  { id: 'h14', destinoId: '6', nombre: 'Trastevere B&B', estrellas: 3, precioNoche: 68000, disponibleDesde: '2027-01-01', disponibleHasta: '2027-12-31', habitacionesDisponibles: 3, servicios: ['Desayuno', 'Wifi'] },
]
