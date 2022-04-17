import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from '../../layout/Loader';
import Button from '../../form/Button';
import Input from '../../form/Input';
import Form from '../../form/Form';
import styles from './styles.module.css';

function Horas({ entity }) {
  const [contractedHours, setContractedHours] = useState('');
  const [infoIsLoading, setInfoIsLoading] = useState(true);
  const [hora, setHora] = useState({
    hoursContracted: 0,
    hoursUsed: 0,
  });

  function toHHMMSS(segundos) {
    let hours = Math.floor(segundos / 3600);
    let minutes = Math.floor((segundos - hours * 3600) / 60);

    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return { hours, minutes };
  }

  function getHoursInfo(id) {
    setInfoIsLoading(true);
    axios.get(`http://localhost:3001/horas/${id}`).then((response) => {
      setHora(response.data);
      setInfoIsLoading(false);
    });
  }

  useEffect(() => {
    getHoursInfo(entity);
  }, [entity]);

  function handleOnSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/hours/${hora.id}`, {
        ...hora,
        hoursContracted: contractedHours,
      })
      .then(() => getHoursInfo(entity));
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.gridContainer}>
          <h1>Contratadas</h1>
          <h1>Consumidas</h1>
          <h1>Percentual</h1>
          <div className={styles.item}>
            {infoIsLoading ? (
              <Loader size={100} />
            ) : (
              <>
                <h1>{toHHMMSS(hora.segundos).hours}</h1>h
              </>
            )}
          </div>
          <div className={styles.item}>
            {infoIsLoading ? (
              <Loader size={100} />
            ) : (
              <>
                <h1>{hora.hoursUsed}</h1>h
              </>
            )}
          </div>
          <div className={styles.item}>
            {infoIsLoading ? (
              <Loader size={100} />
            ) : (
              <>
                <h1>
                  {hora.hoursContracted > 0
                    ? toHHMMSS(
                        Math.floor(
                          (hora.hoursUsed / hora.hoursContracted) * 100
                        )
                      ).hours
                    : 0}
                </h1>
                %
              </>
            )}
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <Form handleOnSubmit={handleOnSubmit}>
          <div className={styles.flexContainer}>
            <h1>Horas Contratadas:</h1>
            <Input
              type="number"
              handleOnChange={(e) => setContractedHours(e.target.value)}
              customClass={styles.input}
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
