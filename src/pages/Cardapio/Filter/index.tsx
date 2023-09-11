
import styles from './Filter.module.scss';
import filter from './filter.json';

type Iopcao = typeof filter[0];

/*interface IOpcao {
    id: number;
    label: string;
}*/

export default function Filter (){
    return(

<div className={styles.filtro}>
    {filter.map((opcao) => (
        <button className={styles.filtro__filtro} key={opcao.id}>
            {opcao.label}
        </button>
    
    ))}
</div>

    )


}