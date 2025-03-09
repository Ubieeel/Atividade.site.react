import style from "@/components/header/header.module.css"
export default function Header() {
    return (
        <header className={style.header}>
            <div>
                <picture>
                    <img className={style.logo} src="/Logonike.jpg"/>
                </picture>
            </div>


            <section>
                <ul className={style.list}>
                    <li>
                        <p> <a className={style.headerlinks} href="#"> Home</a> </p>
                    </li>
                    <li>
                        <p> <a className={style.headerlinks} href="#">Mulher </a> </p>
                    </li>
                    <li>
                        <p> <a className={style.headerlinks} href="#"> Customize </a> </p>
                    </li>
                    <li>
                        <p> <a className={style.headerlinks} href="#"> infantil </a></p>
                    </li>
                </ul>

            </section>



            <section>

            </section>
        </header>
    )
}