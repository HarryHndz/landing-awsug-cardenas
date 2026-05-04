export type PastEvent = {
  id: string
  title: string
  /** Fecha corta visible, ej. "Ene 2026" */
  dateLabel: string
  summary?: string
  href?: string
  imageSrc?: string
}

export type Organizer = {
  name: string
  role: string
  initials: string
  featured?: boolean
}

export const community = {
  displayName: 'AWS User Group Cárdenas',
  meetupCity: 'Villahermosa',
  locale: 'Cárdenas, Tabasco, MX',
  members: 17,
  globalGroupsApprox: 425,
  meetupUrl: 'https://www.meetup.com/aws-ug-cardenas/',
  instagramUrl: 'https://www.instagram.com/aws.cardenas/',
} as const

export const upcomingEvent = {
  title:'Fundamentos de AWS: Entendiendo la Infraestructura que Mueve Internet',
  startIso: '2026-05-06T19:00:00-06:00',
  endIso: '2026-05-06T20:00:00-06:00',
  venueName: 'Instituto Tecnológico Superior de Comalcalco',
  venueAddress:'Carretera vecinal, Paraíso — Comalcalco KM 2, RA Occidente 3ra sección, 86650 Comalcalco, Tab.',
  locality: 'Comalcalco',
  timezoneLabel: 'CST',
  attendeesApprox: 13,
  badge: 'EVENTO INAUGURAL',
  description:'El objetivo de este evento es presentar oficialmente el AWS User Group Cárdenas. Dar a conocer a los líderes de la comunidad y generar un espacio de aprendizaje y colaboración para desarrolladores, estudiantes y profesionales interesados en tecnologías en la nube en Amazon Web Services.',
  slugUrl:'https://www.meetup.com/aws-ug-cardenas/events/314439427/',
  imageSlides: '/Slides-platica1.png',
  flyerImage: '/post1-evento.png',
} as const

export const aboutCopy =
  'Somos una comunidad de tecnología enfocada en el aprendizaje, la colaboración y el crecimiento profesional en torno a Amazon Web Services (AWS). Nuestro objetivo es crear un espacio donde estudiantes, desarrolladores, profesionales y amantes de la tecnología puedan aprender sobre cloud computing o fortalecer sus conocimientos a través de charlas, talleres prácticos y networking.'

/** Listo para añadir charlas cuando ocurran; vacío muestra estado “próximo” en UI */
export const pastEvents: PastEvent[] = []

export const organizers: Organizer[] = [
  {
    name: 'HarryHndz',
    role: 'Organizador principal · Meetup Host',
    initials: 'H',
    featured: true,
  },
  {
    name: 'Co-organizadora',
    role: 'Organizadora de comunidad · Próximo anuncio',
    initials: 'C',
  },
  {
    name: 'Co-organizador',
    role: 'Organizador de comunidad · Próximo anuncio',
    initials: '+',
  },
]

export const mapSearchUrl =
  'https://www.google.com/maps/search/?api=1&query=Instituto+Tecnol%C3%B3gico+Superior+de+Comalcalco,+Comalcalco,+Tabasco'
