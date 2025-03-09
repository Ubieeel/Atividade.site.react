import style from "./sobrenos.module.css"

export default function Sobrenos(){
    return (
        <section className={style.all}>
            <h1 className={style.titulo}> Sobre nos</h1>


            <h5 className={style.legenda}> Legenda Legenda Legenda Legenda Legenda Legenda Legenda Legenda <br/>
            Legenda Legenda Legenda Legenda Legenda Legenda Legenda Legenda</h5>


            <div className={style.ftsbr}>
                
                <img  className={style.fotonk} src="/sobrenos.jpg"/>

                <div className={style.text}>

                    <h4>
                        Titulo do trecho
                    </h4>

                    <p>Legenda Legenda Legenda Legenda Legenda Legenda Legenda Legenda <br/>
                  Legenda Legenda Legenda Legenda</p>
                </div>

            </div>

            <div className={style.ftsbr2}>
                
                <img  className={style.fotonk} src="/sobrenos.jpg"/>

                <div className={style.text}>

                    <h4>
                        Titulo do trecho
                    </h4>

                    <p>Legenda Legenda Legenda Legenda Legenda Legenda Legenda Legenda <br/>
                  Legenda Legenda Legenda Legenda</p>
                </div>

            </div>



        </section>

        
    )
}