import PropTypes from 'prop-types';
import styles from './styles.module.css';

function HoraItem({ tempo }) {
  function toHHMMSS(segundos) {
    const hours = Math.floor(segundos / 3600);
    let minutes = Math.floor((segundos - hours * 3600) / 60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return { hours, minutes };
  }

  return (
    <div className={styles.item}>
      <h1 className={styles.horas}>
        {toHHMMSS(tempo).hours}
        <p className={styles.minutos}>:{toHHMMSS(tempo).minutes}</p>
        <i>h</i>
      </h1>
    </div>
  );
}

HoraItem.propTypes = {
  tempo: PropTypes.number.isRequired,
};

export default HoraItem;
