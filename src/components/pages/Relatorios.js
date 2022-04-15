import Button from '../Button';
import Table from '../Table';
import Input from '../Input';
import styles from './Relatorios.module.css';

function Relatorios() {
  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <h1>De</h1>
        <Input type="date" customClass={styles.date} />
        <h1>até</h1>
        <Input type="date" customClass={styles.date} />
        <Button texto="Gerar" />
      </div>
      <Table columns={['Período', 'Gerado em', 'Ações']}>
        <tr>
          <td>01/04/2022</td>
          <td>31/04/2022</td>
          <td>teste</td>
        </tr>
      </Table>
    </div>
  );
}

export default Relatorios;
