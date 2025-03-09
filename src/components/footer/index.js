import style from "@/components/footer/footer.module.css"

export default function Footer() {
  return (
    <section className={style.footer}>

        <div className={style.position}>

            <div className={style.Logo}>

                <h3>LOGO</h3>

                <p>Legenda Legenda Legenda Legenda Legenda <br/> Legenda Legenda Legenda
                Legenda Legenda Legenda Legenda</p>

            </div>

            <div className={style.sobrenos}>

                <h4> Sobre Nos</h4>

                <ul>
                    <li> How it Works</li>
                    <li> How it Works</li>
                    <li> How it Works</li>
                </ul>


            </div>


            
            <div className={style.sobrenos}>

                <h4> Contato</h4>

                <ul>
                    <li> How it Works</li>
                    <li> How it Works</li>
                    <li> How it Works</li>
                </ul>


            </div>


            
            <div className={style.social}>

                <h4> Redes Sociais</h4>

                <ul>
                    <li> <img src="twitter.jpg"/> <a href="#">Instagram</a></li>
                    <li> <img src="insta.png"/> <a href="#">Twitter</a></li>
                    <li> <img src="face.png"/> <a href="#">Facebook</a></li>
                </ul>


            </div>




        </div>

    </section>
  );
};

