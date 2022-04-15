import PropTypes from 'prop-types';

function Form({ handleOnSubmit, children }) {
  return (
    <form action="" onSubmit={handleOnSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  handleOnSubmit: PropTypes.func,
  children: PropTypes.node,
};

export default Form;
