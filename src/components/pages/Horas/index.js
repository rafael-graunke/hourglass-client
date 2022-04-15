import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../../form/Button';
import Input from '../../form/Input';
import Form from '../../form/Form';
import styles from './styles.module.css';

function Horas({ entity }) {
  const [contractedHours, setContractedHours] = useState('');
  const [hoursInfo, setHoursInfo] = useState({});

  function getHoursInfo(id) {
    axios.get(`http://localhost:5000/hours?entity=${id}`).then((response) => {
      setHoursInfo(response.data[0]);
    });
  }

  useEffect(() => {
    getHoursInfo(entity);
  }, [entity]);

  function handleOnSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/hours/${hoursInfo.id}`, {
        ...hoursInfo,
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
          {hoursInfo && (
            <>
              <div className={styles.item}>
                <h1>{hoursInfo.hoursContracted}</h1>h
              </div>
              <div className={styles.item}>
                <h1>{hoursInfo.hoursUsed}</h1>h
              </div>
              <div className={styles.item}>
                <h1>
                  {Math.floor(
                    (hoursInfo.hoursUsed / hoursInfo.hoursContracted) * 100
                  )}
                </h1>
                %
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
