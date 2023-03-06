import { useRouter } from "next/router"
import {destinos} from "../../pages/index.js"
import Link from 'next/link'

function Destino_Detalle() {
    const router = useRouter()
    const id = router.query.id

    return (
        <div className='Destino_Detalle'>
            <Link href={'..'} className='Flecha'>
                &larr;
            </Link>
            <div className='Destino_Detalle_Contenido'>
                <img className='Destino_Imagen_Larga' src={destinos[id].imagen_larga} alt={destinos[id].titulo}></img>
                <div className='Destino_Detalle_Titulo'>{destinos[id].titulo}</div>
                <div className='Destino_Descripcion_Larga'>{destinos[id].descripcion_larga}</div>
            </div>
        </div>
    )
}

export default Destino_Detalle