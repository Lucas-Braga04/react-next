import styles from "../css/integracao02.module.css"

export default function integracao02(){

    return(
        <>
            <div id={styles.integracao}>
                <div className={styles.vermelho}> Texto 01 </div>
                <div className={styles.amarelo}> Texto 02 </div>
                <div className={styles.verde}> Texto 03 </div>
            </div>
        </>
    )

}