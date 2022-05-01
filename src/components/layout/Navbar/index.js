import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FaCog } from 'react-icons/fa';
import Select from '../../form/Select';
import styles from './styles.module.css';
import { getApiRoute } from '../../../util/util';

function Navbar({ handleSelect }) {
  const [entidades, setEntidades] = useState([]);

  useEffect(() => {
    axios.get(`${getApiRoute()}/api/entidades`).then((response) => {
      const ent = response.data.filter((entidade) => entidade.id !== 0);
      setEntidades(ent);
    });
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.cliente}>
        <h1>Cliente:</h1>
        <Select
          options={entidades}
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
