export interface Project {
  id: number;
  name: string;
  src: string,
  descriptionES: string,
  descriptionEN: string,
  label: string;
  longitud: number;
  direcctiones: string[]
}

export const projects = [
  {
    id: 1,
    name: 'Botella care',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/care-mockup65714.jpg',
    descriptionES: 'Diseño del tape y la etiqueta para una botella de vino borgoña.',
    descriptionEN: 'Design of cup and label for a burgundy wine bottle.',
    label:'BotellaCare',
    longitud: 3,
    direcctiones: []
  },
  {
    id: 2,
    name: 'Linograbado',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/book59272.jpg',
    descriptionES: '',
    descriptionEN: 'Book cover created from a linographic design that I created.',
    label:'Linograbado',
    longitud: 2,
    direcctiones: ['https://www.esda.es/files/images/u709/book59272.jpg','https://www.esda.es/files/images/u709/img-9109954307.jpg']
  },
  {
    id: 3,
    name: 'Clothes',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/039619.jpg',
    descriptionES: 'Para este proyecto he creado 3 ilustraciones y las he aplicado tanto a latas como a camisetas.',
    descriptionEN: 'For this project I have created 3 illustrations and I have apply them to tins and tshirts.',
    label:'Clothes',
    longitud: 3,
    direcctiones: ['assets/Imagenes/Calmkids/0.jpg','assets/Imagenes/Calmkids/2.jpg','assets/Imagenes/Calmkids/3.jpg','assets/Imagenes/Calmkids/4.jpg','assets/Imagenes/Calmkids/11.jpg']
  },
  {
    id: 4,
    name: 'Campaña reciclaje',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/free-modern-a3-poster-mockup10721.jpg',
    descriptionES: 'Este proyecto consistía en diseñar los elementos para una campaña de reciclaje. El objetivo es concienciar tanto a niños como adultos. \n Se trata de un trabajo grupal realizado junto a Irene Otero y Sara Pedraza.',
    descriptionEN: 'This project consisted of designing the elements for a recycling campaign. The objective of this is to educate both children and adults. \n It is a group work carried out together with Irene Otero and Sara Pedraza.',
    label:'CampañaReciclaje',
    longitud: 3,
    direcctiones: []
  },
  {
    id: 5,
    name: 'Covers',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/captura-de-pantalla-76489.jpg',
    descriptionES: 'Diseño de cubiertas de libros infantiles de algunos cuentos clasicos de Charles Perrault',
    descriptionEN: 'Design of children\'s book covers of some classic tales by Charles Perrault.',
    label:'Covers',
    longitud: 3,
    direcctiones: []
  },
  {
    id: 6,
    name: 'Cartel Fiestas del Pilar',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/pilar-m76023.jpg',
    descriptionES: 'Esta ha sido mi propuesta para el cartel promocional de las Fiestas del Pilar 2020. Decidí enfocarlo en el evento más significativo de estas fiestas, el cual es la ofrenda de flores.',
    descriptionEN: 'This has been mi proposal for the promotional poster of the local festivities. I decided to focus it on the most significant event of these holidays, which is the flower offering.',
    label:'CartelFiestasPilar',
    longitud: 3,
    direcctiones: []
  },
  {
    id: 7,
    name: 'Espécimen',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/mockup-330482.jpg',
    descriptionES: 'Para este proyecto he creado una tipografía inspirada en las inscripciones que se pueden encontrar en algunas ruinas romanas. Es una tipografía con modulación y serifas.',
    descriptionEN: 'For this project I created a typeface inspired by the inscriptions that can be found in some Roman ruins. \n This is a type with modulation and serifs.',
    label:'Especimen',
    longitud: 6,
    direcctiones: []
  }
];

