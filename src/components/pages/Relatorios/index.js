import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../form/Button';
import Table from '../../form/Table';
import Input from '../../form/Input';
import Form from '../../form/Form';
import styles from './styles.module.css';

function Relatorios({ entity }) {
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [reports, setReports] = useState([]);

  function getReports(id) {
    axios
      .get(`http://localhost:5000/reports?entity=${id}`)
      .then((response) => setReports(response.data));
  }

  useEffect(() => getReports(entity), [entity]);

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
        {reports.length > 0 &&
          reports.map((report) => (
            <tr>
              <td>{`${report.initialDate} - ${report.finalDate}`}</td>
              <td>{report.dateGenerated}</td>
              <td>teste</td>
            </tr>
          ))}
      </Table>
    </div>
  );
}

Relatorios.propTypes = {
  entity: PropTypes.number.isRequired,
};

export default Relatorios;
