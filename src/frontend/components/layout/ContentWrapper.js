import PropTypes from 'prop-types';
import styles from './ContentWrapper.module.css';

function ContentWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
};

export default ContentWrapper;
