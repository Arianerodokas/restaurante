import styles from './Cardapio.module.scss';
import logo from 'assets/logo.svg'

export default function Cardapio() {
    return (

    <main>
        <nav className={styles.menu}>
            <img src={logo} alt="logo" />
            Aluroni
        </nav>
        <header className={styles.header}>
            <div className={styles.header_text}>
            
            la casa del codice e fantastica!!! "Che cibo delizioso"
            </div>
        </header>
    </main>       

    );

}