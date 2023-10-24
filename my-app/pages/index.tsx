import Titulo from "../components/Titulo"
import Subtitulos from "../components/Subtitulos"
import Imagens from "../components/Imagens"
import Textos from "../components/Textos"


export default function site_estatico(){

    return(

        <>
            <main className="estiloglobal">

                <div>
                <Titulo></Titulo>
                </div>

                <div>
                    <Subtitulos></Subtitulos>
                </div>

                <div>
                    <Imagens></Imagens>
                </div>
                
                <div>
                    <Textos></Textos>
                </div>

            </main>

        </>

    )

}