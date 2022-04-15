import PropTypes from 'prop-types';
import styles from './Input.module.css';

function Input({ type, customClass, handleOnChange, placeholder }) {
  return (
    <input
      type={type}
      className={`${styles.input} ${customClass}`}
      onChange={handleOnChange}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  handleOnChange: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
