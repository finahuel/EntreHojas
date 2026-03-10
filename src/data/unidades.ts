import type { ImageMetadata } from 'astro';

// Importamos todas las imágenes que usaremos
import heroImage6 from '../assets/6.jpg';
import heroImage7 from '../assets/7.jpg';
import heroImage8 from '../assets/8.jpg';
import delrio1 from '../assets/delrio1.jpg';
import delrio2 from '../assets/delrio2.jpg';
import delrio3 from '../assets/delrio3.jpg';
import uruday1 from '../assets/urunday1.jpg';
import uruday2 from '../assets/urunday2.jpg';  
import lirio1 from '../assets/lirio1.jpg';
import lirio2 from '../assets/lirio2.jpg';
import lapacho1 from '../assets/lapacho1.jpg';
import lapacho2 from '../assets/lapacho2.jpg';
import guembe1 from '../assets/guembe1.jpg';
import guembe2 from '../assets/guembe2.jpg';
import azota1 from '../assets/azota1.jpg';
import azota2 from '../assets/azota2.jpg';



export interface Unidad {
  id: string; // Este será el slug para la URL (ej: /unidades/casita-del-rio)
  nombre: string;
  descripcion: string; // Descripción corta para la tarjeta
  descripcionLarga: string; // Descripción completa para la página de detalle
  imagenPrincipal: ImageMetadata; // Imagen para la tarjeta
  imagenes: ImageMetadata[]; // Galería de imágenes para la página de detalle
  capacidad: string;
  amenidades: string[];
  precio: number;
}

export const unidades: Unidad[] = [
  {
    id: 'casita-del-rio',
    nombre: 'La Casita del Río',
    descripcion: 'Acogedora cabaña inmersa en la tranquilidad del bosque, ideal para una escapada romántica.',
    descripcionLarga: 'Disfruta de una estadía inolvidable en "La Casita del Río". Esta encantadora cabaña de madera ofrece un ambiente cálido y privado, perfecto para parejas o familias pequeñas. Cuenta con una cocina completamente equipada, un cómodo living y un quincho exterior con parrilla para disfrutar de asados al aire libre. Su ubicación privilegiada te permite estar en contacto directo con la naturaleza sin renunciar al confort.',
    imagenPrincipal: delrio1,
    imagenes: [delrio1, delrio2, delrio3],
    capacidad: "4",
    amenidades: ['Wi-Fi', 'Aire Acondicionado', 'Cocina con Horno', 'Electrodomésticos', 'Quincho con Parrilla', 'TV con DirecTV', 'Ropa de Cama', 'Toallas'],
    precio: 150,
  },
  {
    id: 'duplex-urunday',
    nombre: 'Duplex Urunday',
    descripcion: 'Moderno duplex con vistas impresionantes al lago y comodidades de lujo.',
    descripcionLarga: 'Nuestro "Duplex Urunday" combina diseño moderno y confort en un espacio abierto y luminoso. Despertá con una vista panorámica del lago desde tu cama. El duplex está equipado con una cocina de última generación, un Smart TV para tus momentos de ocio y un balcón privado donde podrás relajarte y admirar el paisaje. El acceso directo al lago lo hace ideal para los amantes de los deportes acuáticos.',
    imagenPrincipal: uruday1,
    imagenes: [uruday1, uruday2], // Usando imágenes existentes como ejemplo
    capacidad: "5-7",
    amenidades: ['Wi-Fi', 'Aire Acondicionado', 'Smart TV', 'Acceso al Lago', 'Cocina Completa', 'Balcón', 'Cafetera Nespresso', 'Caja de Seguridad'],
    precio: 250,
  },
  {
    id: 'lirio-misionero',
    nombre: 'Lirio Misionero',
    descripcion: 'Cabaña rústica con diseño moderno, ideal para familias, con acceso directo a senderos naturales.',
    descripcionLarga: 'Vive la magia de dormir bajo las estrellas en nuestro "Lirio Misionero". Diseñado para una inmersión total en la naturaleza, su ventana panorámica te ofrece un espectáculo celestial inigualable. A pesar de su concepto rústico, no escatima en comodidades: cuenta con climatización, un baño privado completo y un telescopio para que explores el cosmos. El desayuno artesanal está incluido para completar una experiencia redonda.',
    imagenPrincipal: lirio1,
    imagenes: [lirio1, lirio2], // Puedes añadir más imágenes aquí
    capacidad: "6",
    amenidades: ['Climatización', 'Telescopio', 'Baño Privado', 'Desayuno Incluido', 'Terraza Privada', 'Sin Wi-Fi (desconexión total)'],
    precio: 200,
  },
  {
    id: 'lapacho-amarillo',
    nombre: 'Lapacho Amarillo',
    descripcion: 'Un refugio íntimo para parejas con vistas al jardín botánico y jacuzzi privado.',
    descripcionLarga: 'El "Lapacho Amarillo" es un nido de amor en medio de la naturaleza. Su diseño compacto y elegante ofrece todas las comodidades para una escapada romántica. Disfruta de un jacuzzi privado en la terraza, una pequeña cocina equipada y un ambiente sereno. Ideal para desconectar y reconectar. Incluye desayuno gourmet y acceso a bicicletas para explorar los alrededores.',
    imagenPrincipal: lapacho1,
    imagenes: [lapacho1, lapacho2], // Puedes añadir más imágenes aquí
    capacidad: "2",
    amenidades: ['Jacuzzi Privado', 'Climatización', 'Cocina Equipada', 'Desayuno Gourmet', 'Bicicletas', 'Terraza Privada'],
    precio: 220,
  },
  {
    id: 'guembe',
    nombre: 'Guembé',
    descripcion: 'Cabaña espaciosa con piscina privada, ideal para grupos grandes o familias que buscan diversión.',
    descripcionLarga: 'La cabaña "Guembé" es el espacio perfecto para reuniones familiares o de amigos. Con tres habitaciones cómodas, una cocina industrial y un amplio comedor, garantiza confort para todos. Disfruta de la piscina privada, la cancha de vóley y la zona de parrilla. Ubicada cerca del río, ofrece actividades acuáticas y senderismo. Incluye servicio de limpieza diario.',
    imagenPrincipal: guembe1,
    imagenes: [guembe1, guembe2], // Puedes añadir más imágenes aquí
    capacidad: "8-10",
    amenidades: ['Piscina Privada', 'Cocina Industrial', '3 Habitaciones', 'Cancha de Vóley', 'Parrilla', 'Servicio de Limpieza'],
    precio: 350,
  },
  {
    id: 'azota-caballo',
    nombre: 'Azota Caballo',
    descripcion: 'Cabaña ecológica con diseño sostenible, perfecta para amantes de la naturaleza, con huerto orgánico y paneles solares.',
    descripcionLarga: 'Experimenta la vida sostenible en "Azota Caballo". Esta cabaña ecológica utiliza energía solar y recolecta agua de lluvia. Ofrece un diseño minimalista y funcional, con grandes ventanales que conectan con el entorno. Participa en el cuidado del huerto orgánico o relájate en la terraza con vistas a la selva. Ideal para quienes buscan una experiencia de bajo impacto ambiental. Incluye clases de yoga matutinas.',
    imagenPrincipal: azota1,
    imagenes: [azota1, azota2], // Puedes añadir más imágenes aquí
    capacidad: "3-7",
    amenidades: ['Paneles Solares', 'Huerto Orgánico', 'Clases de Yoga', 'Diseño Sostenible', 'Grandes Ventanales', 'Wi-Fi'],
    precio: 180,
  }
];