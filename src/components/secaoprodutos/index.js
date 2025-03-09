import style from "./secaoprodutos.module.css"

export default function secaoprodutos(){
    return(
        <section className={style.section}>

            <h1 className={style.titulo}> Produtos em destaque </h1>

            <h5 className={style.legenda}> printer took a galley of type and scrambled it to make a type specimen book. It <br/>has survived not only five centuries, but also the leap into electronic typesetting </h5>

        <div className={style.linh}>

                <div className={style.cardprod}>
                        <h2> Tenis Top </h2>

                        <img className={style.imgprod} src="tenis.jpg"/>


                        <p className={style.preco}> R$ 72,00 </p>
                
                </div>

                <div className={style.cardprod}>
                         
                        <h2> Tenis Top </h2>

                        <img className={style.imgprod} src=" tenis.jpg"/>


                        <p> R$ 72,00 </p>
                </div>
           

        </div>

                <div className={style.linh}>

        <div className={style.cardprod}>
                <h2> Tenis Top </h2>

                <img className={style.imgprod} src="tenis.jpg"/>


                <p className={style.preco}> R$ 72,00 </p>

        </div>

        <div className={style.cardprod}>
                
                <h2> Tenis Top </h2>

                <img className={style.imgprod} src=" tenis.jpg"/>


                <p> R$ 72,00 </p>
        </div>


        </div>

            

        </section>
    )
}