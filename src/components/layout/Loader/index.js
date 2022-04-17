/* eslint-disable global-require */
import PropTypes from 'prop-types';
import styles from './styles.module.css';

function Loader({ customClass, size }) {
  return <img src="./loading.svg" alt="Loading" width={size} />;
}

Loader.propTypes = {
  customClass: PropTypes.string,
  size: PropTypes.number,
};

export default Loader;
