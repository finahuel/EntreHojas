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
  capacidad: number | string;
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
    capacidad: 4,
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
    descripcion: 'Una experiencia única de conexión con la naturaleza bajo un manto de estrellas.',
    descripcionLarga: 'Vive la magia de dormir bajo las estrellas en nuestro "Lirio Misionero". Diseñado para una inmersión total en la naturaleza, su ventana panorámica te ofrece un espectáculo celestial inigualable. A pesar de su concepto rústico, no escatima en comodidades: cuenta con climatización, un baño privado completo y un telescopio para que explores el cosmos. El desayuno artesanal está incluido para completar una experiencia redonda.',
    imagenPrincipal: lirio1,
    imagenes: [lirio1, lirio2], // Puedes añadir más imágenes aquí
    capacidad: 6,
    amenidades: ['Climatización', 'Telescopio', 'Baño Privado', 'Desayuno Incluido', 'Terraza Privada', 'Sin Wi-Fi (desconexión total)'],
    precio: 200,
  },
  {
    id: 'lapacho-amarillo',
    nombre: 'Lapacho Amarillo',
    descripcion: 'Una experiencia única de conexión con la naturaleza bajo un manto de estrellas.',
    descripcionLarga: 'Vive la magia de dormir bajo las estrellas en nuestro "Lapacho Amarillo". Diseñado para una inmersión total en la naturaleza, su ventana panorámica te ofrece un espectáculo celestial inigualable. A pesar de su concepto rústico, no escatima en comodidades: cuenta con climatización, un baño privado completo y un telescopio para que explores el cosmos. El desayuno artesanal está incluido para completar una experiencia redonda.',
    imagenPrincipal: lapacho1,
    imagenes: [lapacho1, lapacho2], // Puedes añadir más imágenes aquí
    capacidad: 2,
    amenidades: ['Climatización', 'Telescopio', 'Baño Privado', 'Desayuno Incluido', 'Terraza Privada', 'Sin Wi-Fi (desconexión total)'],
    precio: 200,
  },
  {
    id: 'guembe',
    nombre: 'Guembé',
    descripcion: 'Una experiencia única de conexión con la naturaleza bajo un manto de estrellas.',
    descripcionLarga: 'Vive la magia de dormir bajo las estrellas en nuestro "Guembé". Diseñado para una inmersión total en la naturaleza, su ventana panorámica te ofrece un espectáculo celestial inigualable. A pesar de su concepto rústico, no escatima en comodidades: cuenta con climatización, un baño privado completo y un telescopio para que explores el cosmos. El desayuno artesanal está incluido para completar una experiencia redonda.',
    imagenPrincipal: guembe1,
    imagenes: [guembe1, guembe2], // Puedes añadir más imágenes aquí
    capacidad: 4,
    amenidades: ['Climatización', 'Telescopio', 'Baño Privado', 'Desayuno Incluido', 'Terraza Privada', 'Sin Wi-Fi (desconexión total)'],
    precio: 200,
  },
  {
    id: 'azota-caballo',
    nombre: 'Azota Caballo',
    descripcion: 'Una experiencia única de conexión con la naturaleza bajo un manto de estrellas.',
    descripcionLarga: 'Vive la magia de dormir bajo las estrellas en nuestro "Azota Caballo". Diseñado para una inmersión total en la naturaleza, su ventana panorámica te ofrece un espectáculo celestial inigualable. A pesar de su concepto rústico, no escatima en comodidades: cuenta con climatización, un baño privado completo y un telescopio para que explores el cosmos. El desayuno artesanal está incluido para completar una experiencia redonda.',
    imagenPrincipal: azota1,
    imagenes: [azota1, azota2], // Puedes añadir más imágenes aquí
    capacidad: "3-7",
    amenidades: ['Climatización', 'Telescopio', 'Baño Privado', 'Desayuno Incluido', 'Terraza Privada', 'Sin Wi-Fi (desconexión total)'],
    precio: 200,
  }
];