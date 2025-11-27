import { Injectable } from '@angular/core';

export interface Tatuador {
  id: number;
  nombre: string;
  ciudad: string;
  estilo: string;
  precio: string;
  rating: number;
  whatsapp: string;
  instagram: string;
  foto: string;
  descripcion: string;
}

export const tatuadores: Tatuador[] = [
  { id: 1, nombre: "Juancho Style", ciudad: "Bogotá", estilo: "Blackwork", precio: "$400.000+", rating: 4.9, whatsapp: "573102345678", instagram: "juanchostyle", foto: "https://i.imgur.com/8vZkX0A.jpeg", descripcion: "Rey del blackwork en Bogotá. Líneas gruesas, contraste brutal y geometría sagrada eterna." },
  { id: 2, nombre: "Ink Queen", ciudad: "Barranquilla", estilo: "Fine Line", precio: "$300.000+", rating: 4.9, whatsapp: "573154445566", instagram: "inkqueen.co", foto: "https://i.imgur.com/fP3kH3D.jpeg", descripcion: "Reina del fine line. Tatuajes delicados y elegantes, perfectos para primerizos." },
  { id: 3, nombre: "Tattoo Mafia", ciudad: "Medellín", estilo: "Japanese", precio: "$600.000+", rating: 5.0, whatsapp: "573123456789", instagram: "tattoomafia", foto: "https://i.imgur.com/X5r4K9L.jpeg", descripcion: "Japonés tradicional puro: dragones, koi y fondos épicos del período Edo." },
  { id: 4, nombre: "La Negra Tattoo", ciudad: "Cali", estilo: "Realismo", precio: "$500.000+", rating: 4.8, whatsapp: "573187654321", instagram: "lanegra_tattoo", foto: "https://i.imgur.com/9kLmN2v.jpeg", descripcion: "Hiperrealismo en color y B&N. Retratos que parecen fotografías vivas." },
  { id: 5, nombre: "David Ink", ciudad: "Cartagena", estilo: "Old School", precio: "$350.000+", rating: 4.7, whatsapp: "573105557788", instagram: "davidinkcartagena", foto: "https://i.imgur.com/Z3xP9qR.jpeg", descripcion: "Old school caribeño con colores que brillan bajo el sol." },
  { id: 6, nombre: "Neko Tattoo", ciudad: "Bogotá", estilo: "Neo Traditional", precio: "$450.000+", rating: 4.8, whatsapp: "573112233445", instagram: "nekotattoo", foto: "https://i.imgur.com/7bX9pLm.jpeg", descripcion: "Neo traditional vibrante: animales y flores con personalidad única." },
  { id: 7, nombre: "Camilo Ink", ciudad: "Medellín", estilo: "Lettering", precio: "$250.000+", rating: 4.9, whatsapp: "573001122334", instagram: "camiloletras", foto: "https://i.imgur.com/Qw3Rt5v.jpeg", descripcion: "El dios del lettering. Frases con flow perfecto y tipografías únicas." },
  { id: 8, nombre: "Valentina Tattoo", ciudad: "Cali", estilo: "Watercolor", precio: "$380.000+", rating: 4.7, whatsapp: "573223344556", instagram: "valewatercolor", foto: "https://i.imgur.com/HjK8mNp.jpeg", descripcion: "Efecto acuarela mágico. Colores suaves y salpicaduras como pintura real." },
  { id: 9, nombre: "El Tío Tatuador", ciudad: "Bucaramanga", estilo: "Tribal", precio: "$320.000+", rating: 4.6, whatsapp: "573445566778", instagram: "eltiotatuador", foto: "https://i.imgur.com/4fGmP2s.jpeg", descripcion: "Tribal moderno y polinesio con significado profundo." },
  { id: 10, nombre: "Sofía Art", ciudad: "Pereira", estilo: "Minimalista", precio: "$280.000+", rating: 4.9, whatsapp: "573556677889", instagram: "sofia.minimal", foto: "https://i.imgur.com/LmN9vXc.jpeg", descripcion: "Minimalismo puro. Pequeños tatuajes con gran impacto." },
  { id: 11, nombre: "Andrés Dotwork", ciudad: "Manizales", estilo: "Dotwork", precio: "$420.000+", rating: 4.8, whatsapp: "573119988776", instagram: "andresdotwork", foto: "https://i.imgur.com/5rYpL2m.jpeg", descripcion: "Mandalas y geometría sagrada hechos solo con puntos." },
  { id: 12, nombre: "Luna Tattoo", ciudad: "Santa Marta", estilo: "Surrealismo", precio: "$480.000+", rating: 4.9, whatsapp: "573223311445", instagram: "lunatattooart", foto: "https://i.imgur.com/kP9vM3x.jpeg", descripcion: "Surrealismo psicodélico inspirado en el mar y los sueños." },
  { id: 13, nombre: "Rasta Ink", ciudad: "Ibagué", estilo: "Reggae Style", precio: "$300.000+", rating: 4.7, whatsapp: "573334455667", instagram: "rastaink", foto: "https://i.imgur.com/9mX2vRt.jpeg", descripcion: "Leones de Judá, colores Rasta y buena vibra en cada trazo." },
  { id: 14, nombre: "Marce Biomech", ciudad: "Villavicencio", estilo: "Biomechanical", precio: "$550.000+", rating: 5.0, whatsapp: "573001122889", instagram: "marcebiomech", foto: "https://i.imgur.com/X7kL9pQ.jpeg", descripcion: "Estilo Giger: máquinas orgánicas fusionadas con carne." },
  { id: 15, nombre: "Karla Sketch", ciudad: "Pasto", estilo: "Sketch", precio: "$290.000+", rating: 4.8, whatsapp: "573223344778", instagram: "karlasketch", foto: "https://i.imgur.com/fG4hJ8v.jpeg", descripcion: "Tatuajes que parecen bocetos vivos recién salidos del cuaderno." },
  { id: 16, nombre: "El Profe Tattoo", ciudad: "Tunja", estilo: "Chicano", precio: "$380.000+", rating: 4.7, whatsapp: "573112233990", instagram: "elprofetattoo", foto: "https://i.imgur.com/2nKpQ7w.jpeg", descripcion: "Chicano clásico: payasas, rosas y old english como en LA." },
  { id: 17, nombre: "Camila Ignorant", ciudad: "Neiva", estilo: "Ignorant Style", precio: "$260.000+", rating: 4.6, whatsapp: "573334455889", instagram: "camilaignorant", foto: "https://i.imgur.com/Rt5vN9x.jpeg", descripcion: "Humor negro y dibujos 'feos' con actitud." },
  { id: 18, nombre: "Diego Trash", ciudad: "Popayán", estilo: "Trash Polka", precio: "$460.000+", rating: 4.9, whatsapp: "573223311667", instagram: "diegotrashpolka", foto: "https://i.imgur.com/8vZkX0A.jpeg", descripcion: "Trash polka colombiano: realismo + salpicaduras rojas y negras." },
  { id: 19, nombre: "Natalia Ornamental", ciudad: "Armenia", estilo: "Ornamental", precio: "$410.000+", rating: 4.8, whatsapp: "573112233556", instagram: "nataliaornamental", foto: "https://i.imgur.com/7bX9pLm.jpeg", descripcion: "Patrones ornamentales elegantes para cubrir brazos y piernas." },
  { id: 20, nombre: "Sebas Geometric", ciudad: "Sincelejo", estilo: "Geometric", precio: "$390.000+", rating: 4.9, whatsapp: "573334455223", instagram: "sebasgeometric", foto: "https://i.imgur.com/Qw3Rt5v.jpeg", descripcion: "Geometría sagrada y patrones imposibles que hipnotizan." },
  { id: 21, nombre: "Mateo Brush", ciudad: "Montería", estilo: "Brush Stroke", precio: "$340.000+", rating: 4.7, whatsapp: "573221133445", instagram: "mateobrush", foto: "https://i.imgur.com/HjK8mNp.jpeg", descripcion: "Pinceladas gruesas como si fueran pintadas con brocha gorda." },
  { id: 22, nombre: "Isabella Mandala", ciudad: "Cúcuta", estilo: "Mandala", precio: "$430.000+", rating: 4.9, whatsapp: "573112299887", instagram: "isabellamandala", foto: "https://i.imgur.com/4fGmP2s.jpeg", descripcion: "Mandalas perfectos hechos a mano alzada. Simetría imposible." },
  { id: 23, nombre: "Pipe Glitch", ciudad: "Barrancabermeja", estilo: "Glitch", precio: "$360.000+", rating: 4.8, whatsapp: "573334466778", instagram: "pipeglitch", foto: "https://i.imgur.com/LmN9vXc.jpeg", descripcion: "Estilo glitch digital: errores, píxeles y efecto cyberpunk." },
  { id: 24, nombre: "Laura Patchwork", ciudad: "Quibdó", estilo: "Patchwork", precio: "$310.000+", rating: 4.6, whatsapp: "573223355667", instagram: "laurapatch", foto: "https://i.imgur.com/5rYpL2m.jpeg", descripcion: "Patchwork loco: tatuajes pequeños sin orden ni concierto." },
  { id: 25, nombre: "Felipe Dark Art", ciudad: "Riohacha", estilo: "Dark Art", precio: "$490.000+", rating: 4.9, whatsapp: "573112244556", instagram: "felipedarkart", foto: "https://i.imgur.com/kP9vM3x.jpeg", descripcion: "Oscuridad pura: calaveras, demonios y horror gótico." },
  { id: 26, nombre: "Daniela Floral", ciudad: "Valledupar", estilo: "Botanical", precio: "$370.000+", rating: 4.8, whatsapp: "573334477889", instagram: "danielabotanical", foto: "https://i.imgur.com/9mX2vRt.jpeg", descripcion: "Flores hiperrealistas que parecen crecer en la piel." },
  { id: 27, nombre: "Santiago Cover Up", ciudad: "Mitú", estilo: "Cover Up", precio: "$520.000+", rating: 5.0, whatsapp: "573001133445", instagram: "santiagocover", foto: "https://i.imgur.com/X7kL9pQ.jpeg", descripcion: "El mago de los cover ups. Convierte cualquier tatuaje feo en obra maestra." },
  { id: 28, nombre: "Caro Anime", ciudad: "Leticia", estilo: "Anime", precio: "$330.000+", rating: 4.7, whatsapp: "573223366778", instagram: "caroanima", foto: "https://i.imgur.com/fG4hJ8v.jpeg", descripcion: "Personajes de anime y manga con color y shading perfecto." },
  { id: 29, nombre: "Julián Micro", ciudad: "San Andrés", estilo: "Micro Realism", precio: "$450.000+", rating: 4.9, whatsapp: "573112255667", instagram: "julianmicro", foto: "https://i.imgur.com/2nKpQ7w.jpeg", descripcion: "Realismo en tamaño micro. Retratos de 2cm que parecen fotos." },
  { id: 30, nombre: "Paula Glow", ciudad: "Bogotá", estilo: "UV / Glow", precio: "$500.000+", rating: 4.8, whatsapp: "573334488990", instagram: "paulaglow", foto: "https://i.imgur.com/Rt5vN9x.jpeg", descripcion: "Tatuajes que brillan en luz negra. La locura total en la rumba." }
];

@Injectable({
  providedIn: 'root'
})
export class TatuadoresService {
  getTatuadores(): Tatuador[] { return tatuadores; }
  getTatuadorById(id: number): Tatuador | undefined {
    return tatuadores.find(t => t.id === id);
  }
}