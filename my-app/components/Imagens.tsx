import Images  from "../styles/styles.module.css"

export default function Imagens(){
    return(
        <>
        
       <img id={Images.imagemfront} alt="front" />
       <img id={Images.imagemback} alt="back" />
       <img id={Images.imagemfull} alt="full" />
        
        </>
    )
}