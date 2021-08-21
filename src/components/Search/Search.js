import PropTypes from 'prop-types';
import styles from './Search.module.css';

const Search = ({ setSearch }) => (
  <input
    className={styles.search}
    placeholder="Insert hero name"
    type="search"
    onChange={e => setSearch(e.target.value)}
  />
);

Search.propTypes = { setSearch: PropTypes.func.isRequired };

export default Search;
