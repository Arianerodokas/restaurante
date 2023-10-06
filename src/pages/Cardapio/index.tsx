import styles from "./Cardapio.module.scss";
import logo from "assets/logo.png";
import Filtro from "./Filtro";
import { useState } from "react";
import Filter from "./Filter/index";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  return (
    <main>
      {/* <nav className={styles.menu__img}>
        <img src={logo} alt="logo" />
      </nav> */}
      <header className={styles.header}>
        <div className={styles.header__text}>Aproveite o frescor da Vida</div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Tipos de sucos</h3>
        <Filtro busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filter}>
            <Filter filtro={filtro} setFiltro={setFiltro} />
        </div>
      </section>
    </main>
  );
}
