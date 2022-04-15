import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.panel}>
      <ul>
        <li>Teste 1</li>
        <li>Teste 2</li>
        <li>Teste 3</li>
      </ul>
    </div>
  );
}

export default Sidebar;
