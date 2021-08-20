import PropTypes from 'prop-types';

const ErrorPage = ({ message }) => <p>{message}</p>;

ErrorPage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorPage;
