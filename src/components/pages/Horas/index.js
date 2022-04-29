import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from '../../layout/Loader';
import Button from '../../form/Button';
import Input from '../../form/Input';
import Form from '../../form/Form';
import styles from './styles.module.css';
import HoraItem from './HoraItem';
import PercentualItem from './PercentualItem';
import { getApiRoute } from '../../../util/util';

function Horas({ entity }) {
  const [horas, setHoras] = useState('');
  const [infoIsLoading, setInfoIsLoading] = useState(true);
  const [contrato, setContrato] = useState({});

  function buscaContrato(id) {
    setInfoIsLoading(true);
    axios.get(`${getApiRoute()}/api/horas/${id}`).then((response) => {
      setContrato(response.data);
      setInfoIsLoading(false);
    });
  }

  useEffect(() => {
    buscaContrato(entity);
  }, [entity]);

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!contrato.existe) {
      axios
        .post(`${getApiRoute()}/api/horas`, {
          idEntidade: entity,
          segundosDisponiveis: horas * 3600,
        })
        .then(() => buscaContrato(entity));
    } else {
      axios
        .put(`${getApiRoute()}/api/horas/${entity}`, {
          segundosDisponiveis: horas * 3600,
        })
        .then(() => buscaContrato(entity));
    }
    setHoras('');
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.gridContainer}>
          <h1>Contratadas</h1>
          <h1>Consumidas</h1>
          <h1>Percentual</h1>

          {infoIsLoading ? (
            <>
              <div className={styles.item}>
                <Loader size={100} />
              </div>
              <div className={styles.item}>
                <Loader size={100} />
              </div>
              <div className={styles.item}>
                <Loader size={100} />
              </div>
            </>
          ) : (
            <>
              <HoraItem tempo={contrato.segundosDisponiveis} />
              <HoraItem tempo={contrato.segundosGastos} />
              <PercentualItem valor={contrato.percentual} />
              <div className={styles.item}>
                <h1>{}</h1>
              </div>
            </>
          )}
        </div>
      </section>
      <section className={styles.container}>
        <Form handleOnSubmit={handleOnSubmit}>
          <div className={styles.flexContainer}>
            <h1>Horas Contratadas:</h1>
            <Input
              type="number"
              handleOnChange={(e) => setHoras(e.target.value)}
              customClass={styles.input}
              value={horas}
            />
            <Button texto="Alterar" />
          </div>
        </Form>
      </section>
    </>
  );
}

Horas.propTypes = {
  entity: PropTypes.number.isRequired,
};

export default Horas;
