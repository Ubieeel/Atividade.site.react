import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Image from "next/image";
import Header from "@/components/header";
import Carroussel from "@/components/carroussel";
import Secaoprodutos from "@/components/secaoprodutos";
import Sobrenos from "@/components/secaosobrenos";
import Footer from "@/components/footer";
import Rodape from "@/components/rodape";


export default function Home() {
  return (
    <>
      <Head>
        <title>Nike</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header/>

        <section>
              <Carroussel/>
        </section>

        <Secaoprodutos/>

        <Sobrenos/>

        <Footer/>

        <Rodape/>
    </>
  );
}
