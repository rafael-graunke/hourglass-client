import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
import styles from './styles.module.css';

function MenuItem({ texto, to }) {
  return (
    <Link to={to} className={styles.menuItem}>
      <FaCircle size={10} className={styles.dot} />
      {texto}
    </Link>
  );
}

MenuItem.propTypes = {
  texto: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
