import styles from './Cardapio.module.scss';
import logo from 'assets/logo.svg'
import Filtro from './Filtro';
import { useState } from 'react';
import Filter from './Filter/index';

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    return (

    <main>
        <nav className={styles.menu}>
            <img src={logo} alt="logo" />
        </nav>
        <header className={styles.header}>
            <div className={styles.header__text}>
            Pancia piena, felicità piena!
            </div>
        </header>

        <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>Cardápio</h3>
            <Filtro busca={busca} setBusca={setBusca}/>
            <div className={styles.cardapio__filter}>
         <Filter/>   
        </div>
        </section>

    </main>       

    );

}