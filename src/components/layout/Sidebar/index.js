import MenuItem from '../MenuItem';
import styles from './styles.module.css';

function Sidebar() {
  return (
    <div className={styles.panel}>
      <MenuItem to="/horas" texto="Horas" />
      <MenuItem to="/relatorios" texto="Relatórios" />
      <MenuItem to="/emails" texto="E-mails" />
    </div>
  );
}

export default Sidebar;
