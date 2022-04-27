import PropTypes from 'prop-types';
import styles from './styles.module.css';

function Input({ type, customClass, handleOnChange, placeholder, value }) {
  return (
    <input
      type={type}
      className={`${styles.input} ${customClass}`}
      onChange={handleOnChange}
      placeholder={placeholder}
      value={value}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  handleOnChange: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
