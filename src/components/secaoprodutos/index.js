import style from "./secaoprodutos.module.css"

export default function secaoprodutos(){
    return(
        <section className={style.section}>

            <h1 className={style.titulo}> Produtos em destaque </h1>

            <h5 className={style.legenda}> printer took a galley of type and scrambled it to make a type specimen book. It <br/>has survived not only five centuries, but also the leap into electronic typesetting </h5>

        <div className={style.linh}>

                <div className={style.cardprod}>
                        
                        <h2>  AIR MAX TN TOXIC </h2>

                        <p className={style.preco}> R$ 1072,00 </p>
                       
                        <button className={style.orgcard}> Comprar</button>
                       
                </div>

                <div className={style.cardprod2}>
                         
                        <h2> AIR MAX TN FLOUR</h2>
                    
                       


                        <p className={style.preco}> R$ 2072,00 </p>

                        <button  className={style.orgcard}> Comprar</button>
                </div>
           
           

        </div>

                <div className={style.linh}>

        <div className={style.cardprod3}>
                <h2>  AIR MAX TN OFF WHITE </h2>

              


                <p className={style.preco}> R$ 1072,00 </p>

                <button  className={style.orgcard}> Comprar</button>
        </div>

        <div className={style.cardprod4}>
                
                <h2>  AIR MAX TN ICED </h2>

                


                <p className={style.preco}> R$ 2072,00 </p>

                <button  className={style.orgcard}> Comprar</button>
        </div>


        </div>

            

        </section>
    )
}