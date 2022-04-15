import PropTypes from 'prop-types';
import styles from './styles.module.css';

function Button({ texto, handleOnClick }) {
  return (
    <button className={styles.btn} type="submit" onClick={handleOnClick}>
      {texto}
    </button>
  );
}

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func,
};

export default Button;
