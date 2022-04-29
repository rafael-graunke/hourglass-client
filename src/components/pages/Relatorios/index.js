import PropTypes from 'prop-types';
import { FaDownload, FaTrash } from 'react-icons/fa';
import { saveAs } from 'file-saver';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../layout/Loader';
import Button from '../../form/Button';
import Table from '../../form/Table';
import Input from '../../form/Input';
import Form from '../../form/Form';
import styles from './styles.module.css';
import { getApiRoute } from '../../../util/util';

function Relatorios({ entity }) {
  const [dataInicial, setDataInicial] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [relatorioIsLoading, setRelatorioIsLoading] = useState(true);
  const [relatorios, setRelatorios] = useState([]);

  function formataData(dt) {
    const options = { timeZone: 'UTC' };
    return new Date(dt).toLocaleDateString('pt-BR', options);
  }

  function getReports(id) {
    setRelatorioIsLoading(true);
    axios.get(`${getApiRoute()}/api/relatorios/${id}`).then((response) => {
      setRelatorios(response.data);
      setRelatorioIsLoading(false);
    });
  }

  useEffect(() => getReports(entity), [entity]);

  function handleOnSubmit(e) {
    e.preventDefault();
    if (dataInicial && dataFinal) {
      axios
        .post(`${getApiRoute()}/api/relatorios`, {
          dataInicial,
          dataFinal,
          idEntidade: entity,
          dataGerado: new Date().toISOString(),
        })
        .then(() => getReports(entity));
    }
  }

  function downloadImage(name) {
    return () => {
      saveAs(`${getApiRoute()}/api/files/${name}`, 'relatorio.pdf');
    };
  }

  function removeRelatorio(id) {
    return () => {
      axios
        .delete(`${getApiRoute()}/api/relatorios/${id}`)
        .then(() => getReports(entity));
    };
  }

  return (
    <div className={styles.container}>
      <Form handleOnSubmit={handleOnSubmit}>
        <div className={styles.flexContainer}>
          <h1>De</h1>
          <Input
            type="date"
            customClass={styles.date}
            handleOnChange={(e) => setDataInicial(e.target.value)}
          />
          <h1>até</h1>
          <Input
            type="date"
            customClass={styles.date}
            handleOnChange={(e) => setDataFinal(e.target.value)}
          />
          <Button texto="Gerar" />
        </div>
      </Form>
      {relatorioIsLoading && (
        <div className={styles.flexCenter}>
          <Loader />
        </div>
      )}
      {!relatorioIsLoading && relatorios.length === 0 && (
        <strong>Nenhum relatório encontrado.</strong>
      )}
      {!relatorioIsLoading && relatorios.length > 0 && (
        <Table columns={['Período', 'Gerado em', 'Ações']}>
          {relatorios.map((relatorio, index) => (
            <tr
              key={relatorio.id}
              className={index % 2 !== 0 ? styles.odd : ''}
            >
              <td>{`${formataData(relatorio.dataInicial)} - ${formataData(
                relatorio.dataFinal
              )}`}</td>
              <td>{formataData(relatorio.dataGerado)}</td>
              <td>
                <FaDownload
                  className={styles.clickable}
                  onClick={downloadImage(relatorio.nomeArquivo)}
                />
                <FaTrash
                  className={styles.clickable}
                  onClick={removeRelatorio(relatorio.id)}
                />
              </td>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
}

Relatorios.propTypes = {
  entity: PropTypes.number.isRequired,
};

export default Relatorios;
