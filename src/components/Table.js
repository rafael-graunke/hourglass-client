import PropTypes from 'prop-types';
import styles from './Table.module.css';

function Table({ columns, children }) {
  return (
    <div className={styles.table}>
      <table>
        <thead>
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </thead>
        {children}
      </table>
    </div>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
};

export default Table;
