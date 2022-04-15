import Button from '../Button';
import Table from '../Table';
import Input from '../Input';
import styles from './Emails.module.css';

function Emails() {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <h1>Email: </h1>
        <Input
          type="email"
          customClass={styles.date}
          placeholder="email@dominio.com.br"
        />
        <Button texto="Adicionar" />
      </div>
      <Table columns={['E-mails', 'Ações']}>
        <tr>
          <td>teste@bebber.com.br</td>
          <td>teste</td>
        </tr>
      </Table>
    </div>
  );
}

export default Emails;
