import PropTypes from 'prop-types';
import styles from './styles.module.css';

function PercentualItem({ valor }) {
  return (
    <div className={styles.item}>
      <h1 className={styles.integer}>
        {Math.floor(valor)}
        <p className={styles.float}>
          .{Math.floor((valor - Math.floor(valor)).toFixed(2) * 100)}
        </p>
        <i>%</i>
      </h1>
    </div>
  );
}

PercentualItem.propTypes = {
  valor: PropTypes.number.isRequired,
};

export default PercentualItem;
