import styles from "./Filter.module.scss";
import filter from "./filter.json";

type IOpcao = typeof filter[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filter({ filtro, setFiltro }: Props) {
  function selecionarFilter(opcao: IOpcao) {
    return setFiltro(opcao.id);
  }
  return (
    <div className={styles.filtro}>
      {filter.map((opcao) => (
        <button className={`
        ${styles.filtro__filtro}
        ${filtro === opcao.id ? styles["filtro__filtro--ativo"]: ""}
        `} 
        key={opcao.id}
        onClick={()=> selecionarFilter(opcao)}>
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
