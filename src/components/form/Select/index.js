import PropTypes from 'prop-types';
import styles from './styles.module.css';

function Select({ options, customClass, handleSelect }) {
  return (
    <select
      className={`${styles.select} ${customClass}`}
      onChange={(e) => {
        handleSelect(Number(e.target.value));
      }}
    >
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  customClass: PropTypes.string,
  handleSelect: PropTypes.func,
};

export default Select;
