import PropTypes from 'prop-types';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Loader from '../../layout/Loader';
import Button from '../../form/Button';
import Table from '../../form/Table';
import Input from '../../form/Input';
import Form from '../../form/Form';
import styles from './styles.module.css';
import { getApiRoute } from '../../../util/util';

function Emails({ entity }) {
  const [endereco, setEndereco] = useState('');
  const [emails, setEmails] = useState([]);
  const [emailIsLoading, setEmailIsLoading] = useState(true);

  function getEmails(id) {
    setEmailIsLoading(true);
    axios
      .get(`${getApiRoute()}/api/emails/${id}`)
      .then((response) => {
        setEmails(response.data);
        setEmailIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function removeEmail(id) {
    return () => {
      axios
        .delete(`${getApiRoute()}/api/emails/${id}`)
        .then(() => getEmails(entity));
    };
  }

  useEffect(() => {
    getEmails(entity);
  }, [entity]);

  function handleOnSubmit(e) {
    e.preventDefault();
    axios
      .post(`${getApiRoute()}/api/emails/`, {
        idEntidade: entity,
        endereco,
      })
      .then(() => {
        getEmails(entity);
        setEndereco('');
      });
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
            handleOnChange={(e) => setEndereco(e.target.value)}
            value={endereco}
          />
          <Button texto="Adicionar" />
        </div>
      </Form>
      {emailIsLoading && (
        <div className={styles.flexCenter}>
          <Loader />
        </div>
      )}
      {!emailIsLoading && emails.length === 0 && (
        <strong>Nenhum e-mail cadastrado.</strong>
      )}
      {!emailIsLoading && emails.length > 0 && (
        <Table columns={['E-mails', 'Ações']}>
          {emails ? (
            emails.map((mail, index) => (
              <tr key={mail.id} className={index % 2 !== 0 ? styles.odd : ''}>
                <td>{mail.endereco}</td>
                <td>
                  <FaTrash
                    className={styles.clickable}
                    onClick={removeEmail(mail.id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>Buscando E-mails</td>
            </tr>
          )}
        </Table>
      )}
    </div>
  );
}

Emails.propTypes = {
  entity: PropTypes.number,
};

export default Emails;
