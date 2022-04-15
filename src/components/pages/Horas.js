import Button from '../Button';
import Input from '../Input';
import styles from './Horas.module.css';

function Horas() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.gridContainer}>
          <h1>Contratadas</h1>
          <h1>Consumidas</h1>
          <h1>Percentual</h1>
          <div className={styles.item}>
            <h1>30</h1>h
          </div>
          <div className={styles.item}>
            <h1>15</h1>h
          </div>
          <div className={styles.item}>
            <h1>50</h1>%
          </div>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.flexContainer}>
          <h1>Horas Contratadas:</h1>
          <Input type="number" placeholder={30} customClass={styles.input} />
          <Button texto="Alterar" />
        </div>
      </section>
    </>
  );
}

export default Horas;
