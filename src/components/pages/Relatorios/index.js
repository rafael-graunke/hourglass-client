import { useState } from 'react';
import Button from '../../form/Button';
import Table from '../../form/Table';
import Input from '../../form/Input';
import Form from '../../form/Form';
import styles from './styles.module.css';

function Relatorios() {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <Form handleOnSubmit={handleOnSubmit}>
        <div className={styles.flexContainer}>
          <h1>De</h1>
          <Input
            type="date"
            customClass={styles.date}
            handleOnChange={(e) => setInitialDate(e.target.value)}
          />
          <h1>até</h1>
          <Input
            type="date"
            customClass={styles.date}
            handleOnChange={(e) => setFinalDate(e.target.value)}
          />
          <Button texto="Gerar" />
        </div>
      </Form>
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
