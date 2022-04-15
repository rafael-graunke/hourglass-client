import PropTypes from 'prop-types';
import styles from './Table.module.css';

function Table({ columns, children }) {
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
};

export default Table;
