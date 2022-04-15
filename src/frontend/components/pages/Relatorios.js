import Button from '../Button';
import styles from './Relatorios.module.css';

function Relatorios() {
  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <h1>De</h1>
        <input type="date" className={styles.date} />
        <h1>até</h1>
        <input type="date" className={styles.date} />
        <Button texto="Gerar" />
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <th>Período</th>
            <th>Gerado em</th>
            <th>Ações</th>
          </thead>

          <tr>
            <td>01/04/2022</td>
            <td>31/04/2022</td>
            <td>teste</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Relatorios;
