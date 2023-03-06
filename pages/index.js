import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const destinos = [
  {
    id: 0,
    titulo: 'Sevilla',
    descripcion_corta: 'Sevilla es, probablemente, la ciudad más bonita de toda España. Monumental, colorida, instagrameable, acogedora.',
    descripcion_larga: 'Sevilla es, probablemente, la ciudad más bonita de toda España. Monumental, colorida, instagrameable, acogedora. Como decían los del Rio «Sevilla enamora al mundo por su manera de ser, por su calor, por sus ferias…Sevilla tuvo que ser» y no se equivocaron. Uno de los atractivos más importantes que ver en Sevilla es su maravillosa Plaza de España construida en 1929. Entre otros lugares recomendables de la capital de Andalucía está el Alcazar, el Barrio de Santa Cruz, el barrio de Triana, la Macarena, la catedral y su Giralda, la Torre del Oro, el Parque Maria Luisa y las setas de Sevilla.',
    imagen_corta: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg',
    imagen_larga: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Sevilla_Cathedral_-_Southeast.jpg'
  },
  {
    id: 1,
    titulo: 'Barcelona',
    descripcion_corta: 'Barcelona lo tiene todo! cultura, miradores, mar, buen clima, buena gastronomía,  y es otra de las ciudades que disputa el título de la ciudad más bonita de España.',
    descripcion_larga: 'Barcelona lo tiene todo! cultura, miradores, mar, buen clima, buena gastronomía,  y es otra de las ciudades que disputa el título de la ciudad más bonita de España. Las maravillosas obras de Gaudí, como la Sagrada Familia, el Park Guell, la Pedrera o la Casa Batlló, la convierten en un museo al aire libre. Sus playas mediterráneas, como la famosa Barceloneta, son visitadas por miles turistas cada año. Todo ello sumado a sus numerosos atractivos turísticos como Montjuic, el Tibidabo o el Born y su animada vida nocturna hacen de la capital catalana una de las ciudades de España preferidas por los extranjeros.',
    imagen_corta: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Barcelona%2C_airport_approach_%2827733825928%29.jpg',
    imagen_larga: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Barcelona_%2816877599244%29.jpg'
  },
  {
    id: 2,
    titulo: 'Córdoba',
    descripcion_corta: 'Córdoba, aunque es una de las más pequeñas de la lista, es una de las ciudades más bonitas e importantes del país.',
    descripcion_larga: 'Córdoba, aunque es una de las más pequeñas de la lista, es una de las ciudades más bonitas e importantes del país. Varios de sus monumentos han sido declarados Patrimonio de la Humanidad como la Mezquita-Catedral o la Medina Azahara. Pero lo que la hace realmente atractiva es su fiesta de los patios donde cada mayo las casas cordobesas cubren sus paredes de macetas llenas de coloridas flores para competir por el galardón del patio más bonito de Córdoba.',
    imagen_corta: 'https://upload.wikimedia.org/wikipedia/commons/7/73/C%C3%B3rdoba_aerial_2.jpg',
    imagen_larga: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Courtyard%2C_Cathedral_of_Cordoba.jpg'
  },
  {
    id: 3,
    titulo: 'San Sebastián',
    descripcion_corta: 'Pasear por la Playa de la Concha, llegar hasta el Peine del Viento, contemplar el precioso Palacio de Miramar, o caminar sin rumbo por las calles de su centro histórico son algunas de las mejores cosas que ver y hacer en San Sebastián.',
    descripcion_larga: 'Pasear por la Playa de la Concha, llegar hasta el Peine del Viento, contemplar el precioso Palacio de Miramar, o caminar sin rumbo por las calles de su centro histórico son algunas de las mejores cosas que ver y hacer en San Sebastián, considerada una de las ciudades más bonitas de España y sin duda del País Vasco por su extrema elegancia.  Y es que Donostia fue la ciudad elegida por monarcas y aristócratas del siglo XIX para pasar sus veranos. Una ruta de pintxos por la capital vasca es imprescindible en vuestro viaje. Y es que San Sebastián os conquistará también por el estómago.',
    imagen_corta: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/San_Sebasti%C3%A1n_-_Donostia._%288676131158%29.jpg',
    imagen_larga: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Donostia_%289179553778%29.jpg'
  },
  {
    id: 4,
    titulo: 'Granada',
    descripcion_corta: 'Granada es una de las ciudad más visitadas de España gracias a la Alhambra, el monumento más visitado del país,  que resguarda la ciudad desde las alturas.',
    descripcion_larga: 'Granada es una de las ciudad más visitadas de España gracias a la Alhambra, el monumento más visitado del país,  que resguarda la ciudad desde las alturas. Esta maravilla, merece una mención especial y sin duda dedicarle al menos medio día para visitar bien cada una de sus zonas: la Alcazaba, los Palacios nazaríes y el Generalife. Además de este histórico lugar, hay otras cosas que puedes hacer en Granada como visitar el Albaicín, la Catedral de Granada, pasear por la carrera del Darro, disfrutar de sus tapas, ir de compras por las Alcaicería, asistir a un espectáculo de flamenco en una de las Cuevas del Sacromonte o ver una preciosa puesta de sol desde alguno de sus miradores.',
    imagen_corta: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Montefr%C3%ADo%2C_en_Granada_%28Espa%C3%B1a%29.jpg',
    imagen_larga: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/The_whole_Alhambra_Granada_Spain.jpg'
  }
]

function HomePage() {

  return (
    <div className='Agencia'>
      {destinos.map(destino => {
        return(
          <Link href={`/viaje_detallado/${destino.id}`} key={destino.id} className='Destino'>
            <img className='Destino_Imagen_Corta' src={destino.imagen_corta} alt={destino.titulo}></img>
            <div className='Destino_Texto'>
              <div className='Destino_Titulo'>{destino.titulo}</div>
              <div className='Destino_Descripcion_Corta'>{destino.descripcion_corta}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default HomePage