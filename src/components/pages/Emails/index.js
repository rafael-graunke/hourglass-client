import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from '../../form/Button';
import Table from '../../form/Table';
import Input from '../../form/Input';
import Form from '../../form/Form';
import styles from './styles.module.css';

function Emails({ entity }) {
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState([]);

  function getEmails(id) {
    axios
      .get(`http://localhost:5000/emails?entity=${id}`)
      .then((response) => {
        setEmails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getEmails(entity);
  }, [entity]);

  function handleOnSubmit(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/emails`, {
        entity,
        email,
      })
      .then(() => getEmails(entity));
  }

  return (
    <div className={styles.container}>
      <Form handleOnSubmit={handleOnSubmit}>
        <div className={styles.flexContainer}>
          <h1>Email: </h1>
          <Input
            type="email"
            customClass={styles.email}
            placeholder="email@dominio.com.br"
            handleOnChange={(e) => setEmail(e.target.value)}
          />
          <Button texto="Adicionar" />
        </div>
      </Form>
      <Table columns={['E-mails', 'Ações']}>
        {emails ? (
          emails.map((mail, index) => (
            <tr key={mail.id} className={index % 2 !== 0 ? styles.odd : ''}>
              <td>{mail.email}</td>
              <td>ID: {mail.id}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={2}>Buscando E-mails</td>
          </tr>
        )}
      </Table>
    </div>
  );
}

Emails.propTypes = {
  entity: PropTypes.number,
};

export default Emails;
