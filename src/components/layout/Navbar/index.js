import PropTypes from 'prop-types';
import { FaCog } from 'react-icons/fa';
import Select from '../../form/Select';
import styles from './styles.module.css';

function Navbar({ handleSelect }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.cliente}>
        <h1>Cliente:</h1>
        <Select
          options={[
            { id: 1, name: 'Bebber' },
            { id: 2, name: 'CPM' },
          ]}
          customClass={styles.select}
          handleSelect={handleSelect}
        />
      </div>
      <div>
        <FaCog size={30} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  handleSelect: PropTypes.func,
};

export default Navbar;
