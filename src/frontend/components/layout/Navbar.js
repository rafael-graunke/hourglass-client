import { FaCog } from 'react-icons/fa';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <h2>Cliente: </h2>
      </div>
      <div>
        <FaCog size={30} />
      </div>
    </nav>
  );
}

export default Navbar;
